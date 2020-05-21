import React from "react"
import { graphql } from "gatsby"

export const { query } = graphql`
  query IndexQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <>
      <div>Hello world!</div>
      <ul>{data.allSitePage.edges.map(edge => edge.node.path)}</ul>
    </>
  )
}
