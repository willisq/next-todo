import Header from './Header';
import Navbar from './Navbar';

export const siteTitle = 'Next.js sample website';

export default function Layout({ children, siteTitle,}) {
    return (
        <>
            <Navbar></Navbar>
            <main className="container">
                <Header siteTitle={siteTitle} />
                {children}
            </main>
        </>
    );
}