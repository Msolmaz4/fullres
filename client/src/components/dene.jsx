import React from "react";
import "./dene.css";

const Dene = ({data}) => {
  return (
    <div className="contanier_ana">
    <div className="contanier">
      <div className="wrapper">
        <div className="banner-image">

        </div>
        <h1>{data.name}</h1>
        <p>
         
        {data.body}
        </p>
      </div>
      <div className="button-wrapper">
        <div className="btn outline">DELETE</div>
        <div className="btn fill">UPLOAD</div>
      </div>
    </div>
    </div>
  );
};

export default Dene;
