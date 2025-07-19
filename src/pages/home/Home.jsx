import "./home.scss"
import SearchBar from "../../components/searchBar/SearchBar"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Home = () => {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className='home'>
      {/* Text Container */}
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Curated collection of exceptional properties designed
            for discerning buyers. Experience seamless property
            search with personalized service and exclusive listings.
          </p>
          <SearchBar />

          {/* cta */}
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="imgContainer">
        <img src="/bg.png" alt="hero image" />
      </div>
    </div>
  )
}

export default Home