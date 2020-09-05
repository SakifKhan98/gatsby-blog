import React from "react"
import Layout from "../components/layout"
import Head from "../components/Head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact"></Head>
        <h1>Contact Me</h1>
        <p>180/F/5/Cha, Titas Road, East Rampura, Dhaka -1219</p>
        <p>
          Contact Me On{" "}
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
