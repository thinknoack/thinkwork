import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import IndexHeader from "../components/index_header"
import Works from "../components/works"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const indexData = data
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <IndexHeader />
        <Bio />
        <p>
          Wow, that's weird. Seems like something is off. Please check back
          later.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Works />
    </Layout>
  )
}

export default Work

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data }) => {
  const sitedescription = data.siteMetadata?.sitedescription
  const seoChildren = []
  return (
    <Seo
      title="Gregory Noack Portfolio Landing Page"
      description={sitedescription}
      children={seoChildren}
    />
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
