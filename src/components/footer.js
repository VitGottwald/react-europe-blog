import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  useEffect(() => {
    setTimeout(() => {
      console.log({ site })
    }, 5000)
  }, [site])

  return (
    <footer>
      {site.siteMetadata.title}
      {site.siteMetadata.author}
    </footer>
  )
}
