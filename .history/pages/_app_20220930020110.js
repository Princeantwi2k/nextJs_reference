import Head from 'next/head'
import Layout from '../component/Layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import {SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
    <Layout>
      <Head>
      <link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossOrigin="anonymous" 
/>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </Head>
    <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
 
}

export default MyApp
