import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <div>
      <Layout>
        <Head title="404"></Head>
        <center>
          <h1>Page not Found</h1>
          <p>
            {" "}
            <Link to="/">Head Home</Link>{" "}
          </p>
        </center>
      </Layout>
    </div>
  )
}

export default NotFound
