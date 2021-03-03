import '../../assets/app.css';
import HomeSection from '../homeSection';
import React from 'react';
import Cards from '../cards'
import Footer from '../Footer';

function Home() {
    return (
        <>
          <HomeSection />
          <Cards />
          <Footer />
        </>
    )
}

export default Home;
