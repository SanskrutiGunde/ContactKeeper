import React from "react";

import Contactform from "../contacts/ContactForm.js";
import Contacts from "../contacts/Contacts";
const Home = () => {
  return (
    <div className="gird-2">
      <div>
        <Contactform />
        <Contacts />
      </div>
    </div>
  );
};
export default Home;
