
"use client";
import { useEffect, useState } from "react";
import teamData from "../database/teamData.json";
import SpotifyTrack from "../components/SpotifyTrack";
import Image from "next/image";

const TeamMember = ({ id }) => {
  const [teamMember, setTeamMember] = useState({});

  function findTeamMember() {
    const member = teamData.find((member) => member.id === id);
    const test = member;
    console.log(test);
    return member;
  }

  useEffect(() => {
    const result = findTeamMember();
    setTeamMember((prevState) => ({ ...result }));
  }, [id]);

  return (

            <>
            <section className="memberContainer">
            <article className="imgContainer">
                <Image src={teamMember.avatar}  alt="team-member-avatar" width={250} height={200} />
            </article>

            <article className="textContainer">
                <h2>{teamMember.name}</h2>
                <p>{teamMember.bio}</p>
            

                <div>
                {teamMember?.socialLinks?.map((social) => {
                    return <div>{social.platform}</div>;
                })}
                </div>
            </article>

            </section>

            <section className="spotifyContainer">
                <SpotifyTrack trackId={teamMember.trackId} />
            </section>
                    </>

    
    
  );
};

export default TeamMember;