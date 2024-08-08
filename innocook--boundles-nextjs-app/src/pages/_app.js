import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'; // Import global CSS
import Layout from '@/components/Layout'; // Import Layout component
import RouteGuard from '@/components/RouteGuard'; // Import RouteGuard component
import { AuthProvider } from '@/context/AuthContext'; // Import AuthProvider component
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <RouteGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </AuthProvider>
  );
}
