import * as React from "react";

import Markdown from "markdown-to-jsx";
import { getImage } from "gatsby-plugin-image";
import PostCard from "./PostCard";
import type { BlogPost } from "../../@types/global";

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
    <div>
      <Markdown>{response}</Markdown>
      {sources.length > 0 && (
        <div>
          <h3>Sources:</h3>
          {sources.map((source) => (
            <PostFromSlug posts={posts} key={source} slug={source} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
