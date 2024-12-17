import React from 'react'
import teamData from '../constants/teamData.json'
import ProfileCard from '../constants/ProfileCard'

const Team = () => {
  return (
    <div className="md:mx-24 flex flex-col gap-16 justify-center items-center">
      <div className="flex flex-col gap-8 justify-center items-center">
          <div className="lead flex-col flex md:flex-row gap-12 md:gap-20">
          <ProfileCard name={teamData[0].name} title={teamData[0].title} email={teamData[0].mail} img={teamData[0].img}/>
          <ProfileCard name={teamData[1].name} title={teamData[1].title} email={teamData[1].mail} img={teamData[1].img}/>
          <ProfileCard name={teamData[2].name} title={teamData[2].title} email={teamData[2].mail} img={teamData[2].img}/>
          </div>
          <div className="non-lead flex flex-col md:flex-row flex-wrap gap-12 md:gap-20 justify-center">
          {teamData.slice(3).map((member, index) => (
            <ProfileCard key={index} name={member.name} title={member.title} email={member.mail} img={member.img} />
          ))}
          </div>
      </div>
    </div>  
  )
}

export default Team