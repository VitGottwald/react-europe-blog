import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <ul>
      {data.allMarkdownRemark.nodes.map(post => (
        <li key={post.frontmatter.title}>
          <h4>{post.frontmatter.title}</h4>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        excerpt
      }
    }
  }
`
