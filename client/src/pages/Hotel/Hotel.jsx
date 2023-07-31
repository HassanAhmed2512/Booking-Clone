import "./Hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  // we should use location to take the information that coming from the previous state
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  // State For The slider
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  // Open the slider
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  // Slider move
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  
  // Fetch data for the hotel
  const { data, loading, error } = useFetch(`http://127.0.0.1:8800/api/hotels/find/${id}`);

  // Taking the state from context
  const { dates, options } = useContext(SearchContext);

  // Get the diff between two
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);


  const navigate = useNavigate();

  // To see if it user or not
  const { user } = useContext(AuthContext);

  // Model for Reserve
  const [openModal, setOpenModal] = useState(false);

  console.log(user)

  // To make sure that there is a user
  const handleCheck = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };


  return (
    <div>
      <Navbar />
      <Header type="list" />

     {loading ? (
        "loading"
      ) : (
      <div className="hotelContainer">
        {/* Slider */}
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data.photos} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          {/* Hotel Description */}
          <>
          <button className="bookNow" onClick={handleCheck}  >Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {data.distance} from center
          </span> 
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          </>
          {/* Hotel Image */}
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          {/* Hotel Details */}
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
            </div>

            {/* side box */}
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days} -night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
              </h2>
              <button onClick={handleCheck} >Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>)}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}

    </div>
  );
};

export default Hotel;