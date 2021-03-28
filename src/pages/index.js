import * as React from 'react'
import { graphql, Link } from 'gatsby'

const Index = ({ data }) => {
  console.log(data.allMarkdownRemark)
  const posts = data.allMarkdownRemark.edges
  return (
    <section>
      <h1>Homepage</h1>
      {posts.map(({ node }) => (<div><Link to={node.fields.slug}>{node.frontmatter.title}</Link></div>))}
    </section>
  )
}

export default Index

export const homePageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`