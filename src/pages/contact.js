import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Get in Contact</h1>
    <p>Don't be a stranger, say hi.</p>
    <br />
    <Link to="/">Home</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
