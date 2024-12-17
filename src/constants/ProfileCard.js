import mail from '../assets/mail.svg'

const ProfileCard = ({name, title, email, img}) => {
  return (
    <div className="flex flex-col justify-center items-center  hover:scale-105 transition-all duration-500 ease-in-out group">
        <div className="h-[210px] w-[210px] md:h-52 md:w-52 rounded-full overflow-hidden relative ">
          <img src={img} alt="avatar"   className="object-cover object-center rounded-full absolute top-[-20px] left-0 w-full h-auto"  />
          <div className="absolute rounded-full inset-0 scale-0 bg-black/60 transform transition-all duration-500 ease-in-out group-hover:scale-100 z-10 flex items-center justify-center">
            <a href={`mailto:${email}`}>
            <img
              src={mail}
              alt="social"
              width={30}
              className="filter invert transform active:scale-75 transition-all duration-300 ease-in-out"
            />
            </a>
          </div>
        </div>
        <h1 className="text-lg md:text-xl font-semibold text-white">{name}</h1>
        <h2 className="text-sm md:text-md font-medium text-white/80">{title}</h2>
    </div>
  )
}

export default ProfileCard