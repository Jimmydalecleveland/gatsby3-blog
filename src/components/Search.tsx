import * as React from "react";
import { BlogPost } from "../../@types/global";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import type { SearchResultsProps } from "./SearchResults";
import { SubmitButton, SubmitButtonGlow } from "./SubmitButton";
import { CHAT_BASE_URL } from "../../config";
import { ToggleButton } from "./ToggleButton";

interface SearchProps {
  posts: BlogPost[];
}

type ChatRoute = "chat" | "chat-sans-sources" | "chat2";
type ChatIndex = "simple-prompt" | "simple-sans-sources" | "stricter-prompt";

const chatIndexMap: Record<ChatIndex, ChatRoute> = {
  "simple-prompt": "chat",
  "stricter-prompt": "chat2",
  "simple-sans-sources": "chat-sans-sources",
};

const Search = ({ posts }: SearchProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] =
    React.useState<SearchResultsProps | null>(null);
  const [chatIndex, setChatIndex] =
    React.useState<ChatIndex>("stricter-prompt");

  const askChat = async (query: string) => {
    setSearchResults(null);
    setIsLoading(true);
    const result = await fetch(`${CHAT_BASE_URL}/${chatIndexMap[chatIndex]}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }).then((res) => res.json());

    setIsLoading(false);
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
      <p>Here be some example query suggestions for ye, matey:</p>
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
              askChat("can you give me an example of useContext for React")
            }
          >
            can you give me an example of useContext for React
          </a>
        </li>
      </ul>

      <span>You can select the indexing type to use (demo purposes):</span>
      <div style={{ display: "flex", gap: "10px" }}>
        <ToggleButton
          type="button"
          onClick={() => setChatIndex("simple-prompt")}
          className={chatIndex === "simple-prompt" ? "active" : ""}
        >
          simple prompt
        </ToggleButton>
        <ToggleButton
          type="button"
          onClick={() => setChatIndex("stricter-prompt")}
          className={chatIndex === "stricter-prompt" ? "active" : ""}
        >
          stricter prompt
        </ToggleButton>
        <ToggleButton
          type="button"
          onClick={() => setChatIndex("simple-sans-sources")}
          className={chatIndex === "simple-sans-sources" ? "active" : ""}
        >
          simple with no sources
        </ToggleButton>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          margin: "48px 0",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <SearchBox
          value={searchValue}
          onChange={handleChange}
          placeholder="type your question here..."
        />
        <SubmitButton
          type="submit"
          className={isLoading ? "loading" : ""}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Ask Question"}
          <SubmitButtonGlow className={isLoading ? "loading" : ""} />
        </SubmitButton>
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
