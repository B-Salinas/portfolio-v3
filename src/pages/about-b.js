import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h1>More about B</h1>
    <p>
      <b> tldr; </b> After graduating with a B.S. in Mathematics, I transitioned
      into software development by attending App Academy as a full-time software
      engineering student. I'm currently trying to find my niche, but I really
      enjoy designing, automation & testing, and the ethereum blockchain as of
      right now.
    </p>
    <p> (More to come soon.)</p>
    <br />
    {/* <p>
      I guess I'll start at the beginning. But feel free to skip around, I won't
      be offended —
    </p>
    Use storyLinks later when I figured out how to nest pages!
    <br /> */}
    <Link to="/">Home</Link>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
