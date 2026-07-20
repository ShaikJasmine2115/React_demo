import { FaGithubAlt } from "react-icons/fa";
import type { GithubUser } from "../src/types";

const UserCard = ({ data }: { data: GithubUser }) => {
    return (
        <div className="user-card">
        <img src={data.avatar_url} alt={data.name} className="avatar" />
        <h2>{data.name || data.login}</h2>
        <p className="bio">{data.bio}</p>
        <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="profile-btn"><FaGithubAlt /> View Profile</a>
      </div>

    )
}

export default UserCard;