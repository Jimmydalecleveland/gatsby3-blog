import * as React from "react";

import Markdown from "markdown-to-jsx";
import Prism from "prismjs";
import { getImage } from "gatsby-plugin-image";
import PostCard from "./PostCard";
import type { BlogPost } from "../../@types/global";

const Code = ({ language = "javascript", children }) => {
  const html = Prism.highlight(children, Prism.languages[language], language);
  return <code dangerouslySetInnerHTML={{ __html: html }} />;
};

const Pre = ({ children }) => (
  <div className="gatsby-highlight">
    <pre>{children}</pre>
  </div>
);

const options = {
  wrapper: React.Fragment,
  overrides: {
    code: { component: Code },
    pre: { component: Pre },
  },
};

const PostFromSlug = ({
  posts = [],
  slug,
}: {
  posts: BlogPost[];
  slug: string;
}) => {
  const post = posts.find((post) => post.node.frontmatter.slug === slug);
  if (!post) return null;

  const {
    excerpt,
    fields,
    frontmatter: { title, description, featuredImage, date },
  } = post.node;
  const image = getImage(featuredImage);

  return (
    <PostCard
      key={fields.slug}
      slug={fields.slug}
      title={title}
      date={date}
      description={description}
      excerpt={excerpt}
      image={image}
    />
  );
};

export interface SearchResultsProps {
  posts: BlogPost[];
  response: string;
  sources: string[];
}

const SearchResults = ({ posts, response, sources }: SearchResultsProps) => {
  return (
    <>
      <Markdown options={options}>{response}</Markdown>
      {sources.length > 0 && (
        <>
          <h2>Sources:</h2>
          {sources.map((source) => (
            <PostFromSlug posts={posts} key={source} slug={source} />
          ))}
        </>
      )}
    </>
  );
};

export default SearchResults;
