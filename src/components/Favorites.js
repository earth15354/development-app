import "../App.css";
import React from 'react'
import useWindowSize from "./useWindowSize";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Favorites(props) {
    const size = useWindowSize(); 
    console.log(size);
    return (
        <>
            {size.width > 800 &&
                <div className="Cart">
                    <h2>My Favorite Songs</h2>
                    <div className="Items">
                        {props.fav.map((fav,index) => (<p className="items">{fav}</p>))}
                    </div>
                </div>
            }
            {size.width <= 800 &&
                <Dropdown>
                    <Dropdown.Toggle className="favDrop" variant="success">
                        Favorites
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="favMenu">
                        <div className="Items">
                            {props.fav.map((fav,index) => (<p className="items">{fav}</p>))}
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            }
        </>
    )
}