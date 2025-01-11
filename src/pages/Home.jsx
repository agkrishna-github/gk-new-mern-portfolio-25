import HeroPage from "./HeroPage";
import SEO from "../components/SEO";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      const response = await axios.get(
        "https://gk-new-mern-portfolio-25-backend.onrender.com/api/contact/getContacts"
      );
      /* const response = await axios.get(
        "http://localhost:5000/api/contact/getContacts"
      ); 
      
      */

      console.log(response);
      setContacts(response?.data?.AllContacts);
    };

    getContacts();
  }, []);

  console.log("home page render");
  console.log(contacts);

  return (
    <>
      <SEO
        title={"Mern Stack Portfolio - AGK"}
        description={"This is the Portfolio Website"}
      />

      <HeroPage>
        <Header />
        {/* {contacts && contacts?.map((contact, i) => <div>{contact?.name}</div>)} */}
        <MainPage />
      </HeroPage>
    </>
  );
};

export default Home;
