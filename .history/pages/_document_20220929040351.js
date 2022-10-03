import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import Link from 'next/link'
export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
        <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></Link>
        <Link href="/dist/output.css" rel="stylesheet" ></link>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}