import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
const Header = ({ type }) => {
  // State for the destination
  const [destination, setDestination] = useState("");

  // Logic to close and open Date
  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Logic to close and open Option
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  // Take the last state and increese it or decreese it
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // Here to import with it's state and change it or take information from it (Here we will change it so we will only take the function "Dispatch")
  const { dispatch } = useContext(SearchContext);

  // Navegatie from the search part to the result and send data to it 
  const navigate = useNavigate();
  const handleSearch = () => {
    // dispatch fun is that change the state in context
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates:date, options } });
    navigate("/hotels", { state: { destination, date, options } });
  };

  // Check if it user to display the buttom register
  const { user } = useContext(AuthContext);

  return (
    <div className="header">
      <div
        className={
          type == "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {/* Icons */}
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span> Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span> Attractions </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>AirPort taxis</span>
          </div>
        </div>

        {/*  */}
        {type !== "list" && (
          <>
            {/* title and desc */}
            <h1 className="headerTitle"> Let's Travel Around The World </h1>
            <p className="headerDesc">
              {" "}
              Do you want to travel ? come on and book your room and visit new
              places{" "}
            </p>

          {!user &&  <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="headerBtn"> Sign in / Register </button>
            </Link>}

            {/* Seach part */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className="headerSearchInput"
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                />
              </div>

              {/* Here To pick the Date */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setopenDate(!openDate);
                  }}
                >
                  {`${format(date[0].startDate, "yyyy/MM/dd")}
               to
                ${format(date[0].endDate, "yyyy/MM/dd")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>

              {/* Here to pick an option */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                >
                  {" "}
                  {`${options.adult} adult . ${options.children} child . ${options.room} room `}{" "}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText"> Adult </span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButtom"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.adult}`}</span>
                        <button
                          className="optionCounterButtom"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText"> Children </span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButtom"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.children}`}</span>
                        <button
                          className="optionCounterButtom"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText"> Room </span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButtom"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.room}`}</span>
                        <button
                          className="optionCounterButtom"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button
                  className="headerBtn"
                  onClick={() => {
                    handleSearch();
                  }}
                >
                  {" "}
                  Search{" "}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
