import React from "react"
import { graphql } from "gatsby"

export const { query } = graphql`
  query MyQuery($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
export default ({ data }) => {
  console.log(data)
  return (
    <article>
      <h1>This is a blog post</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </article>
  )
}
