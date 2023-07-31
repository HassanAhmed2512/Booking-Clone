import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/Header";
import "./Home.css";
import Featured from "../../components/featured/featured";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>

      <Navbar />

      <Header />

      <div className="homeContainer">
        <Featured />

        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />

        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />

        <MailList/>

        <Footer/>
      </div>
    </div>
  );
};

export default Home;
