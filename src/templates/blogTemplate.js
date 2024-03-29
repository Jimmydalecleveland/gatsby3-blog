import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import swcLogo from "../images/swc-logo.svg";
import Layout from "../components/Layout";
import Typography from "../components/Typography";

const Template = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, fields, html } = markdownRemark;
  const image = getImage(frontmatter.featuredImage);

  return (
    <Layout as="article" itemType="http://schema.org/Article">
      <Helmet>
        <html lang="en" />
        <meta
          name="description"
          content={`A blog post on the topic of: ${frontmatter.title}`}
        />
        <title>SwC - {frontmatter.title}</title>
        <link
          rel="canonical"
          href={`https://blog.jimmydc.com/${fields.slug}/`}
        />
      </Helmet>

      <div className="hero-image">
        <GatsbyImage
          image={image}
          alt="Aesthetic fluff image for post. Not partricularly relevant to content."
        />
        <Link to="/">
          <img
            className="main-logo"
            src={swcLogo}
            alt="Swashbuckling with Code text with flourish decorations and rapier in background"
          />
        </Link>
        {frontmatter.attributionName && (
          <a
            className="attribution"
            href={frontmatter.attributionLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Photo by {frontmatter.attributionName}
          </a>
        )}
      </div>
      <header>
        <Typography itemProp="headline" as="h1">
          {frontmatter.title}
        </Typography>
      </header>
      <Layout dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        attributionName
        attributionLink
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              transformOptions: { fit: COVER }
              placeholder: BLURRED
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`;

export default Template;
