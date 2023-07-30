/**
 * IndexHeader component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexHeader = () => {
  return (
    <div className="IndexHeader">
      <StaticImage
        className="IndexHeader-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <p>this is a header thing</p>
    </div>
  )
}

export default IndexHeader
