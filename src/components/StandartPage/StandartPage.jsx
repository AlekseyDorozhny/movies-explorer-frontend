import React from 'react';

import Header from "../Header/Header";
import Footer from '../Footer/Footer';

function StandartPage({element: Component, ...props}) {
  return(
    <>
    <Header loggedIn={props.loggedIn} />
    <Component {...props} />
    <Footer />
    </>
  )
}

export default StandartPage;
