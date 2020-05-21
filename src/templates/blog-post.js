import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <article>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </article>
  )
}

export const query = graphql`
  query BlogPostQuery($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
