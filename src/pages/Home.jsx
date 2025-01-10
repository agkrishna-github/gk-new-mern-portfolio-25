import HeroPage from "./HeroPage";
import SEO from "../components/SEO";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

const Home = () => {
  console.log("home page render");

  return (
    <>
      <SEO
        title={"Mern Stack Portfolio - AGK"}
        description={"This is the Portfolio Website"}
      />

      <HeroPage>
        <Header />
        <MainPage />
      </HeroPage>
    </>
  );
};

export default Home;
