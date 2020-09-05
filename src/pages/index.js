import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home"></Head>
        <h1>Hello</h1>
        <h2>
          I'm Sakif. An wanna be Web Developer. I am living in lovely Dhaka
        </h2>
        <p>
          Need a Developer??? <Link to="/contact">Click Here to Hire Me</Link>{" "}
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
