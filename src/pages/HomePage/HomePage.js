import React from 'react';
import { HomePageContainer} from "./HomePage.styles";
import Header from '../../components/header/header.component';
import Footer from '../../components/Footer/Footer.component';

function HomePage() {
  return (
    <HomePageContainer>
      <Header />
    </HomePageContainer>
  );
}

export default HomePage