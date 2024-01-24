import React, { useEffect } from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }) {
    useEffect(() => {
        const handleScroll = () => {
            const pageScrollButton = document.querySelector('.page-scroll-button');
            if (pageScrollButton) {
                if (window.scrollY > 300) {
                    pageScrollButton.classList.remove('d-none');
                } else {
                    pageScrollButton.classList.add('d-none');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <button className='page-scroll-button d-none' onClick={() => window.scrollTo(0, 0)}><i className="fa-solid fa-chevron-up"></i></button>
            <Header />
            <main>
                {children}
            </main>
            <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
            <Footer />
        </>
    );
}

export default Layout;
