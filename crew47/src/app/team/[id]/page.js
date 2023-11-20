// component
import TeamMember from "../../../components/TeamMember.js";
import SpotifyTrack from "../../../components/SpotifyTrack.js";

export default function TeamMemberPage({ params }) {
  const id = params.id;
  return <TeamMember id={id} />;
}
