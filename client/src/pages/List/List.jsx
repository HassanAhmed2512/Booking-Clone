import "./List.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../Hooks/useFetch";

const List = () => {
  // we should use location to take the information that coming from the previous state
  const location = useLocation();

  // The state coming from the previous page (Home Page)
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);

  // To open and close the date
  const [openDate, setopenDate] = useState(false);

  // state for the optional 
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  // Here the Fun that will fetch our data 
    const { data, loading, error, reFetch } = useFetch(
      `http://127.0.0.1:8800/api/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
    );

      // When press on the buttom search 
    const handleClick = () => {
      reFetch();
    };


    
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="listContainer">
        <div className="listWrapper">
          {/* Search Part */}
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            {/* Destenation */}
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
            {/* Date */}
            <div className="lsItem">
              <label>Check-in date</label>
              <span
                className="lsSearchText"
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
                />
              )}
            </div>
            {/* Option section */}
            <div className="lsItem">
              <label>Options</label>
             <div className="lsOptionItem">
              <span className="lsOptionText">
                Min Price <small>per night</small>
              </span>
              <input  type="number" className="lsOptionInput" onChange={(e) => setMin(e.target.value)} />
             </div>
             <div className="lsOptionItem">
              <span className="lsOptionText">
                Max Price <small>per night</small>
              </span>
              <input  type="number" className="lsOptionInput"   onChange={(e) => setMax(e.target.value)} />
             </div>
             <div className="lsOptionItem">
              <span className="lsOptionText">
                Adult  
              </span>
              <input  type="number" className="lsOptionInput" placeholder={options.adult} min={1} />
             </div>
             <div className="lsOptionItem">
              <span className="lsOptionText">
                Children 
              </span>
              <input  type="number" className="lsOptionInput" placeholder={options.children} min={0} />
             </div>
             <div className="lsOptionItem">
              <span className="lsOptionText">
                Room 
              </span>
              <input  type="number" className="lsOptionInput" placeholder={options.room} min={1} />
             </div>
            </div>
              {/* Buttom for Search */}
              <button onClick={handleClick} > Search </button>
          </div>
          {/* Result Part */}
          <div className="listResult">         
          {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
