import React from 'react'
import Link from 'next/link'
// team data
import teamData from "../database/teamData.json"

const TeamAvatars = () => {
  return (
   <div className="teamDisplay">
              <h3>Meet the heroes</h3>
              <div className="teamContainer">
                  {teamData.map(member => {
                    return (
                      
                        <Link href={`/team/${member.id}`} className="singleTeamLink" key={member.id}>
                          <article>{member.name}</article>
                        </Link>
                    
                    )
                  })}

              </div>
    </div>
            
  )
}

export default TeamAvatars
