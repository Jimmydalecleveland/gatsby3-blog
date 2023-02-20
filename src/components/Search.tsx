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

  const askChat = async (query: string) => {
    setSearchResults(null);
    const result = await fetch(
      "https://flask-production-f494.up.railway.app/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    ).then((res) => res.json());

    setSearchResults(result);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    askChat(searchValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <p>
        Ahoy there, matey! I be the AI chat with the personality of a pirate,
        ready to help ye find any answer ye seek in this treasure trove of web
        development knowledge. This digital buccaneer is always at the ready to
        help ye navigate the rough seas of web development!
      </p>
      <p>Here be some query suggestions for ye, matey:</p>
      <ul>
        <li>
          <a
            href="#example1"
            onClick={() =>
              askChat("how can I automatically mock an import in jest")
            }
          >
            how can I automatically mock an import in jest
          </a>
        </li>
        <li>
          <a
            href="#example2"
            onClick={() =>
              askChat(
                "I'm getting the error: 'NODE_ENV' is not recognized. Pls help."
              )
            }
          >
            I'm getting the error: 'NODE_ENV' is not recognized. Pls help.
          </a>
        </li>
        <li>
          <a
            href="#example3"
            onClick={() =>
              askChat("I need help reducing my webpack bundle size")
            }
          >
            I need help reducing my webpack bundle size
          </a>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <SearchBox
          value={searchValue}
          onChange={handleChange}
          placeholder="type your question here..."
        />
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
