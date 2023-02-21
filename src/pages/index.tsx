import * as React from "react";
import { Helmet } from "react-helmet";
import { PageProps, graphql, Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import swcLogo from "../images/swc-logo.svg";
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
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      featuredImage: IGatsbyImageData;
    };
  };
}

const Index: React.FC<BlogIndexProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

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
      <Typography center>
        <Link to="/ai-chat">Try the NEW, AI-powered, chat!</Link>
      </Typography>

      {posts.map(({ node }) => {
        const {
          excerpt,
          fields: { slug },
          frontmatter: { title, description, featuredImage, date },
        } = node;
        const image = getImage(featuredImage);

        return (
          <PostCard
            key={slug}
            slug={slug}
            title={title}
            date={date}
            description={description}
            excerpt={excerpt}
            image={image}
          />
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
          excerpt
          fields {
            slug
          }
          frontmatter {
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
