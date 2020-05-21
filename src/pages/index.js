import React from "react"
import { graphql } from "gatsby"
import Footer from "../components/footer"

export default ({ data }) => {
  return (
    <div>
      Hello React Europe!
      <Footer />
    </div>
  )
}

export const query = graphql`
  {
    allSitePage {
      nodes {
        path
      }
    }
  }
`
