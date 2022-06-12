import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
const Header = (props) => {
  return (
    <div className="jumbotron">
      <h6 className="display-3">
        <span>
          <FastfoodIcon style={{ fontSize: "100px" }} />
        </span>
        Food Recipes
      </h6>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          value={props.search}
          onChange={props.onInputHandle}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={props.onSearchHandle}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
