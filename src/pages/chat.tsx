import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link, PageProps } from "gatsby";

import swcLogo from "../images/swc-logo.svg";
import LayoutGrid from "../components/Layout";
import Typography from "../components/Typography";
import Search from "../components/Search";
import type { BlogPost } from "../../@types/global";

interface BlogIndexProps extends PageProps {
  data: AllPostsQuery;
}

interface AllPostsQuery {
  allMarkdownRemark: {
    edges: BlogPost[];
  };
}

const Chat: React.FC<BlogIndexProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  console.log(data);

  return (
    <LayoutGrid>
      <Helmet>
        <html lang="en" />
        <meta name="description" content="Jimmy Cleveland's Coding Blog" />
        <title>Swashbuckling with Code -- Jimmy Cleveland's Coding Blog</title>
        <link rel="canonical" href="https://blog.jimmydc.com/" />
      </Helmet>

      <img
        className="main-logo"
        src={swcLogo}
        alt="Swashbuckling with Code text with flourish decorations and rapier in background"
      />
      <Typography as="h2" center style={{ margin: "20px 0 32px" }}>
        A coding blog by Jimmy Cleveland
      </Typography>

      <Search posts={posts} />
    </LayoutGrid>
  );
};

export default Chat;

export const chatPageQuery = graphql`
  query ChatPageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            slug
            title
            description
            date(formatString: "MMM DD, YYYY")
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  transformOptions: { fit: COVER }
                  placeholder: BLURRED
                  layout: FIXED
                  width: 200
                  height: 132
                )
              }
            }
          }
        }
      }
    }
  }
`;
