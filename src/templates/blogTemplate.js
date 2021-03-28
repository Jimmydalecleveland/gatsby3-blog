import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import SwcLogo from "../public/assets/swc-logo.svg";
import Layout from "../components/Layout";
import Typography from "../components/Typography";

const Template = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const image = getImage(frontmatter.featuredImage)

  return (
    <Layout as="article" itemType="http://schema.org/Article">
      {/* <Head>
        <meta
          name="description"
          content={`A blog post on the topic of: ${frontmatter.title}`}
        />
        <title>SwC - {frontmatter.title}</title>
        <link rel="canonical" href={`https://blog.jimmydc.com/${slug}/`} />
      </Head> */}
      <div className="hero-image">
        <GatsbyImage
          image={image}
          alt="pointless featured image for post"
        />
        {/* <Link href="/">
          <a>
            <SwcLogo className="main-logo" />
          </a>
        </Link> */}
        {frontmatter.attributionName && (
          <a
            className="attribution"
            href={frontmatter.attributionLink}
            target="_blank"
            rel="noopener"
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
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