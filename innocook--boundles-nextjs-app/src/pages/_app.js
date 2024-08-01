import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@/styles/globals.css'; // Import global CSS
import Layout from '../components/Layout'; // Import Layout component
import "bootstrap-icons/font/bootstrap-icons.css";


export default function App({ Component, pageProps }) {
  // Wrap page content in Layout component
  return (<Layout><Component {...pageProps} /></Layout>);
}
