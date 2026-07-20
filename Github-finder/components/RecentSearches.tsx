import { FaClock, FaUser } from "react-icons/fa";
import { useQueryClient } from '@tanstack/react-query'
import {fetchGithubUser} from "../src/api/github";

type RecentSearchesProps = {
    recentUsers: string[];
    onSearch: (username: string) => void;
}

const RecentSearches = ({ recentUsers, onSearch }: RecentSearchesProps) => {
    const queryClient = useQueryClient();
    return(
        <div className="recent-searches">
          <div className="recent-header">
            <FaClock />
            <h3>Recent Searches</h3>
          </div>
          <ul>
            {recentUsers.map((user) => (
              <li key={user}>
                <button onClick={() =>onSearch(user)}
                        onMouseEnter={() =>
                        {
                            queryClient.prefetchQuery({
                                queryKey: ['users', user],
                                queryFn: () => fetchGithubUser(user),
                            })
                        }}>
                  <FaUser className='user-icon' />
                  {user}
                </button>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default RecentSearches;