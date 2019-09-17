import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { sellPint } from "../../actions";
import { Link } from "react-router-dom";

const buttonStyle = {
  marginRight: "auto",
  marginLeft: "auto"
};

const myStyle = {
  listStyleType: "none",
  display: "block",
  float: "right"
};

function KegListTitleEmployee(props) {
  const dispatch = useDispatch();
  return (
    <ul style={myStyle}>
      <li>
        <Button
          onClick={() => {
            dispatch(sellPint(props.id));
            props.onKegSale();
          }}
          style={buttonStyle}
          variant="dark"
        >
          Sell
        </Button>
      </li>
      <li>
        <Link to="/keg_edit">
          <Button className="edit-button" variant="dark">
            {" "}
            Edit{" "}
          </Button>
        </Link>
      </li>
    </ul>
  );
}

export default KegListTitleEmployee;
