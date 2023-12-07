import React from 'react';

import Header from "../Header/Header";
import Footer from '../Footer/Footer';

function StandartPage({element: Component, ...props}) {
  return(
    <>
    <Header loggedIn={props.loggedIn} onBurger={props.onBurger} burgerStatus={props.burgerStatus}/>
    <main>
      <Component {...props} />
    </main>
    <Footer />
    </>
  )
}

export default StandartPage;
