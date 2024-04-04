import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import "../App.css";
import React from 'react';

function ComplexButtonExample(props) {

    function filterGenre(value) {
        let list = [...props.data];
        const filtered = list.filter(item => item.genre === value);
        console.log(filtered);
        props.setData(filtered);
    }

    function filterLength(value) {

        function helperLength(item) {
            const strLength = item.length;
            const floatLength = parseFloat(strLength.replace(":","."));
            console.log(floatLength <= value);
            return floatLength <= value;
        }

        let list = [...props.data];
        const filtered = list.filter(helperLength);
        props.setData(filtered);
    }

    function DropdownNested(subprop) {
        if (subprop.value === "Genre") {
            // console.log(subprop.value)
            return (
                <Dropdown drop="end">
                    <Dropdown.Toggle className="nestedDrop" variant="success">
                        {subprop.value}
                    </Dropdown.Toggle>
                
                    <Dropdown.Menu>
                        <Dropdown.Item href="" onClick={() => filterGenre("Pop")}>Pop</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterGenre("Acapella")}>Acapella</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterGenre("J-Pop")}>J-Pop</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterGenre("Rock")}>Rock</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterGenre("Country")}>Country</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterGenre("Classical")}>Classical</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        } else if (subprop.value === "Length") {
            return (
                <Dropdown drop="end">
                    <Dropdown.Toggle className="nestedDrop" variant="success">
                        {subprop.value}
                    </Dropdown.Toggle>
                
                    <Dropdown.Menu>
                        <Dropdown.Item href="" onClick={() => filterLength(1)}>{"< 1 minute"}</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterLength(2)}>{"< 2 minutes"}</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterLength(3)}>{"< 3 minutes"}</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterLength(4)}>{"< 4 minutes"}</Dropdown.Item>
                        <Dropdown.Item href="" onClick={() => filterLength(5)}>{"< 5 minutes"}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success">
                {props.text}
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                {props.list.map((value, index) => <DropdownNested value={value}/>)}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ComplexButtonExample;