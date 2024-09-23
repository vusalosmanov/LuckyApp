import React, { useEffect } from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ToastContainer } from "react-toastify";
import { FaArrowUp } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }) {
    useEffect(() => {
        const handleScroll = () => {
            const pageScrollButton = document.querySelector('.page-scroll-button');
            if (pageScrollButton) {
                // Show the button when scrolled down more than 300px
                if (window.scrollY > 300) {
                    pageScrollButton.classList.remove('d-none');
                } else {
                    // Hide the button when at the top
                    pageScrollButton.classList.add('d-none');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <button 
                className='page-scroll-button d-none fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full flex justify-center items-center' 
                onClick={() => window.scrollTo(0, 0)}
            >
                <FaArrowUp className="text-center text-[20px]" />
            </button>
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
