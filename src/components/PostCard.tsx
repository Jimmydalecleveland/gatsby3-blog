import * as React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as Styled from "./PostCard.styles";
import Typography from "./Typography";
import { Link } from "gatsby";

export interface PostCardProps {
  excerpt: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: IGatsbyImageData;
}

const PostCard = ({
  slug,
  title,
  description,
  excerpt,
  date,
  image,
}: PostCardProps) => {
  return (
    <Link key={slug} to={slug} className="postcard-wrapper unstyle">
      <Styled.PostCard>
        <div className="text">
          <Typography as="h3">{title}</Typography>
          <Typography as="span" className="date">
            {date}
          </Typography>
          <Typography
            style={{
              margin: 0,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }}
          >
            {description || excerpt}
          </Typography>
        </div>
        <div className="image-wrapper">
          {image && (
            <GatsbyImage
              image={image}
              className="image"
              alt="blog post featured image"
            />
          )}
        </div>
      </Styled.PostCard>
    </Link>
  );
};

export default PostCard;
