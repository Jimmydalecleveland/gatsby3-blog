import * as React from "react";
import { Helmet } from "react-helmet";
import { PageProps, graphql, Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import SwcLogo from "../images/swc-logo.svg";
import LayoutGrid from "../components/Layout";
import Typography from "../components/Typography";
import PostCard from "../components/PostCard";

interface BlogIndexProps extends PageProps {
  data: AllPostsQuery;
}

interface AllPostsQuery {
  allMarkdownRemark: {
    edges: BlogPost[];
  };
}

interface BlogPost {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      featuredImage: IGatsbyImageData;
    };
  };
}

const Index: React.FC<BlogIndexProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <LayoutGrid>
      <Helmet>
        <meta name="description" content="Jimmy Cleveland's Coding Blog" />
        <title>Swashbuckling with Code -- Jimmy Cleveland's Coding Blog</title>
        <link rel="canonical" href="https://blog.jimmydc.com/" />
      </Helmet>

      <img
        className="main-logo"
        src={SwcLogo}
        style={{ margin: "1.5rem auto" }}
      />
      <Typography as="h3" center style={{ margin: "20px 0 32px" }}>
        A coding blog by Jimmy Cleveland
      </Typography>

      {posts.map(({ node }) => {
        const {
          fields: { slug },
          frontmatter: { title, description, featuredImage },
        } = node;
        const image = getImage(featuredImage);

        return (
          <Link key={slug} to={slug} className="unstyle">
            <PostCard>
              <div className="text">
                <Typography as="h4">{title}</Typography>
                <Typography>{description}</Typography>
              </div>
              <div className="image-wrapper">
                <GatsbyImage
                  image={image}
                  className="image"
                  alt="blog post featured image"
                />
              </div>
            </PostCard>
          </Link>
        );
      })}
    </LayoutGrid>
  );
};

export default Index;

export const homePageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  transformOptions: { fit: COVER }
                  layout: FIXED
                  width: 200
                  height: 100
                )
              }
            }
          }
        }
      }
    }
  }
`;
