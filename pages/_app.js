import "bootstrap/dist/css/bootstrap.css";
import '../styles/customcss.css';
import { useEffect } from "react";
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);
    return (
        <SessionProvider>
            <Component {...pageProps} />
        </SessionProvider>
    )
}