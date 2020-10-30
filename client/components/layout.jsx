import Head from "next/head";
import Footer from "./footer";
import CustomNavbar from "./nav";

export default function Layout({
  children,
  title = "Women in ECE | University of Illinois at Urbana-Champaign",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Roboto"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="page">
        <div id="container">
          <CustomNavbar></CustomNavbar>
          {children}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
