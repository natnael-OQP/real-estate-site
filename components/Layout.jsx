import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NaveBar from './NaveBar';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Real Estate</title> 
            </Head>
            <Box maxWidth='1280px' mx='auto' >
                <header>
                    <NaveBar/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </Box>
        </>
    )
}

export default Layout;
