import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>   


        <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Roboto&display=swap"
            as="style"
          />

        <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap"
            as="style"
          />


        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Roboto&display=swap" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" />

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}