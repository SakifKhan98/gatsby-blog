import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About"></Head>
        <h1>About Me</h1>
        <h2>I am an undergraduate student of Mechanical Engineering</h2>
        <p>
          <Link to="/contact">Hire Me Now</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
