import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import "../App.css";

function BasicButtonExample(props) {

  function sort(value) {
    let list = [...props.data];
    if (value === "Title") {
      list.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
      console.log(list)
      props.setData(list);
    } else if (value === "Artist") {
      list.sort((a, b) => a.artist.toUpperCase().localeCompare(b.artist.toUpperCase()));
      console.log(list)
      props.setData(list);
    }
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success">
        {props.text}
      </Dropdown.Toggle>
 
      <Dropdown.Menu>
        {props.list.map((value, index) => (
          <Dropdown.Item href="" onClick={() => sort(value)}>{value}</Dropdown.Item>
        ))}
        {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicButtonExample;