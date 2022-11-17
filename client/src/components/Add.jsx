import React from "react";
import { useState } from "react";
import "./add.css";
//dosya yuklemek icin multer kurduk
import axios from "axios";
//import Alert from "react-bootstrap/Alert";

import { useNavigate } from "react-router-dom";
//add komutu yaptik sonra backebd tarafindann multer yapilir dikkat et

const Add = () => {
  const [desc, setDesc] = useState();
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const navi = useNavigate();

  const send = () => {
    console.log(desc, img);
 
      axios
      .post("http://localhost:3900/products/product", {
        desc,
        img,
        title,
      })
      .then((res) => console.log(res));
    navi("/carts");
  
    
  };

  const geri= ()=>{
    navi("/carts");
  }

  return (
    <div className="add">
      <div className="add1">
        <input
          type="text"
          style={{ border: "2px solid red", color: "black" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name=""
          id="text"
          cols="30"
          rows="10"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>
      <div>
        <input
          type="file"
          accept=".jpg"
          onChange={(e) => setImg(e.target.value)}
        />
      </div>
      <div>
        <button className="add123" onClick={geri}>
          Geri
        </button>
        <button className="add123" onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Add;
