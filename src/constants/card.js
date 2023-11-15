import React from 'react';
import { call, mail } from '../assets';

const ContactCard = (props) => {
 
  return (
    <div className="card mx-10 my-3 md:my:10 lg:my:10">
      <img src={props.img} className="card-img" alt="" />
      <div className="card-body p-4">
        <p className="card-sub-title w-1/2">{props.position}</p>
        <h1 className={`card-title text-${props.size} pt-4`}>{props.name}</h1>
        <div className="w-full h-full flex flex-row items-center justify-center">
          <a href={`tel:${props.number}`} className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
            <img
              src={call}
              alt=""
              className="w-[30%]"
              style={{ filter: "invert(20)" }}
            />
          </a>
          <a href={`mailto:${props.mail}`} className="card-button mx-4 py-4 w-[35%] flex items-center justify-center">
            <img
              src={mail}
              alt=""
              className="w-[30%]"
              style={{ filter: "invert(20)" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
