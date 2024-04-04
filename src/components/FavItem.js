import "../App.css";
// TODO: create a component that displays a single bakery item

export default function FavoriteItem(props) {
    return (
        <div className="FavoriteItem">
            <img src={props.image} alt={props.name}/>
            <h4>{props.name}</h4>
            <p>{props.artist}</p>     
        </div>
    )
}