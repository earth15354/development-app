import "../App.css";
import FavItem from "./FavItem.js"
// TODO: create a component that displays a single bakery item

export default function SongItem(props) {

    function addToFav() {
        if (props.fav[0] === "Nothing here just yet!") {
            props.setFav([FavItem(props)])
        } 
        else {
            const list = props.fav.map((x) => x)

            console.log(props.name)
            console.log(list[0].props.children[1].props.children)
            if (list.some(e => e.props.children[1].props.children === props.name)) {
                console.log(props.name);
            } 
            else {
                list.push(FavItem(props));
            }
            
            props.setFav(list)
        }
    }

    return (
        <div className="BakeryItem">
            <img src={props.image} alt={props.name}/>

            <div className="descriptors">
                <div className="nameArtist">
                    <h4>{props.name}</h4>
                    <p>{props.artist}</p>
                </div>
                <div className="priceCart">
                    <p>{props.genre}</p>
                    <p>{props.length}</p>
                    <button className="addFavButt" onClick={() => addToFav()}>Add to Favorites</button>
                </div>
            </div>
            
        </div>
    )
}