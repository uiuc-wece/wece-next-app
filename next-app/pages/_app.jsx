import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.componentDidCatch = (error, errorInfo) => {
  // You can also log the error to an error reporting service
  console.error("Page Error Boundary: ", error, " – ", errorInfo);
};

export default MyApp;
