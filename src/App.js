import "./App.css";
import { useState } from "react";
import songData from "./assets/song-data.json";
import SongItem from "./components/SongItem";
import DropdownSort from "./components/DropdownSort";
import DropdownFilter from "./components/DropdownFilter";
import Favorites from "./components/Favorites";

songData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  let fav_val = ["Nothing here just yet!"]
  const [fav, setFav] = useState(fav_val)
  const [data, setData] = useState(songData)
  // console.log(data)

  function reset() {
    setData(songData);  
  }

  return (
    <div className="App">
      <div className="Main">
        <h1>My Music App!</h1>

        <div className="Dropdowns">
          <DropdownSort text={"Sort"} list={["Title","Artist"]} data={data} setData={setData}/>
          <DropdownFilter text={"Filter"} list={["Genre","Length"]} data={data} setData={setData}/>
          <button className="Reset" onClick={() => reset()}>Reset</button>
        </div>

        <div className="Grid">
          <div className="Header">
              <div className="descriptors">
                  <div className="headerArtist">
                      <h3>Title</h3>
                      <h3>Artist</h3>
                  </div>
                  <div className="headerGenre">
                      <h3>Genre</h3>
                      <h3>Length</h3>
                  </div>
              </div>
          </div>

          {console.log(data)}


          {data.map((data, index) => (
            <SongItem name = {data.name} 
            artist={data.artist} 
            genre={data.genre} 
            length={data.length} 
            image={data.image} 
            setFav={setFav} fav={fav}/>
          ))}

        </div>
      </div>

      <Favorites fav={fav}/>
    </div>
  );
}

export default App;
