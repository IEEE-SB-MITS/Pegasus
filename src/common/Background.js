import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    let t = 0;
    let lightningTimer = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    ctx.filter = "blur(60px)";

    function drawCloud(x, y, r, alpha) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(160,0,0,${alpha})`);
      g.addColorStop(1, "rgba(160,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawLightning() {
      ctx.save();
      ctx.filter = "blur(2px)";
      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = 2;

      let x = Math.random() * w;
      let y = 0;

      ctx.beginPath();
      ctx.moveTo(x, y);

      while (y < h * 0.6) {
        x += (Math.random() - 0.5) * 40;
        y += Math.random() * 40 + 20;
        ctx.lineTo(x, y);
      }

      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.fillRect(0, 0, w, h);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 8; i++) {
        const x = (i * w) / 6 + Math.sin(t * 0.001 + i) * 200;
        const y = h * 0.4 + Math.cos(t * 0.0015 + i) * 150;
        drawCloud(x, y, 400, 0.12);
      }

      if (lightningTimer <= 0 && Math.random() < 0.01) {
        drawLightning();
        lightningTimer = 8;
      }

      lightningTimer--;
      t += 16;
      requestAnimationFrame(draw);
    }

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
