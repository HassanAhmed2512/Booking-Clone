
import useFetch from "../../Hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8800/api/hotels/countByCity?cities=giza,cairo,austin"
  );

  return (
    <div className="featured">
      {loading ? ("Loading Please Wait ") : (<> <div className="featuredItem">
        <img
          src="https://cdn.alweb.com/thumbs/egyptencyclopedia/article/fit710x532/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9-%D9%83%D9%84-%D9%85%D8%A7-%D9%8A%D9%87%D9%85%D9%83.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Giza</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/ab/d4.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cairo</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div> </>)}
    </div>
  );
};

export default Featured;