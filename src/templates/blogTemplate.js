import * as React from 'react'
import { Helmet } from "react-helmet";
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SwcLogo from "../images/swc-logo.svg";
import Layout from "../components/Layout";
import Typography from "../components/Typography";

const Template = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, fields, html } = markdownRemark
  const image = getImage(frontmatter.featuredImage)
  console.log({ ...frontmatter })

  return (
    <Layout as="article" itemType="http://schema.org/Article">
      <Helmet>
        <meta
          name="description"
          content={`A blog post on the topic of: ${frontmatter.title}`}
        />
        <title>SwC - {frontmatter.title}</title>
        <link rel="canonical" href={`https://blog.jimmydc.com/${fields.slug}/`} />
      </Helmet>

      <div className="hero-image">
        <GatsbyImage
          image={image}
          alt="pointless featured image for post"
        />
        <Link to="/">
          <img className="main-logo" src={SwcLogo} alt="Swashbuckling with Code Logo" />
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
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
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
            gatsbyImageData(transformOptions: { fit: COVER }, layout: FIXED)
          }
        }
      }
    }
  }
`

export default Template