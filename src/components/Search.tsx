import * as React from "react";
import { BlogPost } from "../../@types/global";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import type { SearchResultsProps } from "./SearchResults";

interface SearchProps {
  posts: BlogPost[];
}

const Search = ({ posts }: SearchProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] =
    React.useState<SearchResultsProps | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchValue);
    setSearchResults(null);
    const result = await fetch(
      "https://flask-production-f494.up.railway.app/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchValue }),
      }
    ).then((res) => res.json());
    // const result = await fetch("http://127.0.0.1:8000/chat", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ query: searchValue }),
    // }).then((res) => res.json());
    setSearchResults(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <p>
        This is an early prototype. I'll be making improvements to it soon but I
        wanted to get something up live in the meantime for people to try out.
      </p>
      <p>
        Enter anything into the search box below to ask the AI Chat about my
        blog.
      </p>
      <form onSubmit={handleSubmit}>
        <SearchBox value={searchValue} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {searchResults && (
        <SearchResults
          posts={posts}
          response={searchResults.response}
          sources={searchResults.sources}
        />
      )}
    </div>
  );
};

export default Search;
