import Head from 'next/head'
import Layout from '../component/Layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Head>
   
      </Head>
    <Component {...pageProps} />
    </Layout>
    </>
  )
 
}

export default MyApp
