import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {fetchGithubUser, searchGithubUser} from "../src/api/github";
import UserCard from "./UserCard";
import RecentSearches from "./RecentSearches";
import {useDebounce} from "use-debounce";
import type { GithubUser } from "../src/types";
import SuggestionDropdown from "./SuggestionDropdown";


const UserSearch = () => {
    const [userName, setUserName] = useState("");
    const [submittedUsername, setSubmittedUsername] = useState("");
    const [recentUsers, setRecentUsers] = useState<string[]>(()=>{
      const stored = localStorage.getItem('recentUsers');
      return stored ? JSON.parse(stored) : [];
    });

    const [debouncedUserName] = useDebounce(userName, 300);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // query to fetch specific user
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["users", submittedUsername],
        queryFn: () => fetchGithubUser(submittedUsername),
        enabled: !!submittedUsername,
    });

    // query to fetch suggestions
    const { data: suggestions} = useQuery({
      queryKey: ["github-user-suggestions", debouncedUserName],
      queryFn: () => searchGithubUser(debouncedUserName),
      enabled: debouncedUserName.length > 1,
  });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = userName.trim();
        if (!trimmed) return;
        setSubmittedUsername(trimmed);
        setUserName('');

        setRecentUsers((prev) => {
          const updated = [trimmed, ...prev.filter((user) => user !== trimmed)]
          return updated.slice(0, 5);
        });
    };

    useEffect(()=>{
      localStorage.setItem('recentUsers', JSON.stringify(recentUsers));
    }, [recentUsers]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="dropdown-wrapper">
          <input type="text" placeholder="Search a user" value={userName} onChange={(e) => {
            const value = e.target.value;
            setUserName(value);
            setShowSuggestions(value.trim().length > 1);
          }} />
          {showSuggestions && suggestions?.length > 0 && (
            <SuggestionDropdown suggestions={suggestions} show={showSuggestions} 
            onSelect={(selected) => { 
              setUserName(selected);         
              setShowSuggestions(false);
              if (submittedUsername!==selected){
                setSubmittedUsername(selected);
              }else{
                refetch();
              }
              setRecentUsers((prev) => {
                const updated = [selected, ...prev.filter((user) => user !== selected)]
                return updated.slice(0, 5);
              })
            }}/>
          )}
        </div>
        <button type="submit">Search</button>
      </form>
      {isLoading && <p className="status">Loading...</p>}
      {isError && <p className="status-error">Error: {error.message}</p>}
      {data && <UserCard data={data} />}
      {recentUsers.length > 0 && (
        <RecentSearches recentUsers={recentUsers} onSearch={(userName) =>{
          setUserName(userName); 
          setSubmittedUsername(userName);
        }} />
      )}
    </>
  );
};

export default UserSearch;