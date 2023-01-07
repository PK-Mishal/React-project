import { useState ,useEffect} from "react";
import axios from 'axios'
import "./Banner.css";
import RowPost from "../RowPost/RowPost";

function Banner() {
  const [tag, setTag] = useState("person");
  const [type,setType] =useState(tag)
  const [keyword, setKeyword] = useState("");
  const [ movies,setMovies] = useState([])
  const handleRadioChange = (event) => {
    setTag(event.target.value);
  };
  useEffect(() => {

  },[movies]);
  const handleTextChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(tag === "person"){
     axios.get(`https://api.tvmaze.com/search/people?q=${keyword}`).then((data)=>{
      setType(tag)
      setMovies(data.data)
    }).catch((e)=>{
      setMovies([])
    })
    }
    else{
      axios.get(`https://api.tvmaze.com/search/shows?q=${keyword}`).then((data)=>{
        setType(tag)
        setMovies(data.data)
      }).catch((e)=>{
        setMovies([])
      })
    }
   };
  return (
    // <div>
      <div className="banner">
      <div className="content">
        <h1 className="title">Money </h1>
        <div className="banner_buttons">
          <form onSubmit={handleSubmit} >
            <div className="form">
               Search by:
            <input
              type="radio"
              id="person"
              name="tag"
              value="person"
              checked={tag === "person"}
              onChange={(e)=>handleRadioChange(e)}
            />
            <label htmlFor="person">Actor</label>
            <input
              type="radio"
              id="show"
              name="tag"
              value="show"
              checked={tag === "show"}
              onChange={(e)=>handleRadioChange(e)}
            />
            <label htmlFor="show">Shows</label>
            </div>
           
            <input type="text" placeholder="search here" onChange={(e)=>handleTextChange(e)} />
            <button className="button" type="submit">GO</button>
          </form>
        </div>
        <h1 className="description">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </h1>
      </div>
      <div className="fade_bottom"></div>
      <RowPost movies={movies} type={type}/>
    </div>
    
    // </div>
    
  );
}

export default Banner;
