import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Content from '../component/Content/Content'
import Sidebar from '../component/Sidebar'
export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboad</title>
        <meta name="description" content="Generated by create next app" />

      </Head>

 
      <div>      
      <Content />
     
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />

    </div>
    </>
  )
}
