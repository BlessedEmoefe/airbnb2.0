import React from 'react';
import { HomePageContainer} from "./HomePage.styles";
import Header from '../../components/header/header.component';
import Listings from '../../components/Listings/Listings.component';
import Footer from '../../components/Footer/Footer.component';

function HomePage() {
  return (
    <HomePageContainer>
      <Header />
     <Listings />
     <Footer />
    </HomePageContainer>
  );
}

export default HomePage