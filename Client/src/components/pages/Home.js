import '../../assets/app.css';
import HomeSection from '../HomeSection';
import React from 'react';
import Cards from '../Cards'
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
