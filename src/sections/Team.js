import React from 'react'
import teamData from '../constants/teamData.json'
import ProfileCard from '../constants/ProfileCard'

const Team = () => {
  return (
    <div className="md:mx-24 flex justify-center items-center">
          <div className="non-lead flex flex-wrap gap-16 justify-center">
          {teamData.map((member, index) => (
            <ProfileCard key={index} name={member.name} title={member.title}/>
          ))}
          </div>
    </div>    
  )
}

export default Team