import './style.css';
import Line from './Line.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contents() {
  const [clintID] = useState(
    '8cmdwLcB4sqyQv0NzqxyWvowOQLg7sWZcZakuitoMTg'
  );
  const [Result, setResult] = useState();
  const [title, setTitle] = useState();
  const [discription, setDisc] = useState();

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/w72a24brINI?client_id=` + clintID)
      .then((res) => {
        console.log(res);
        setResult(res.data.urls.small);
        setTitle(res.data.alt_description);
        setDisc(res.data.description);
      });
  }, []);

  return (
    <>
      <div className="row2 top_distance ">
        <div className="col-1 ">
          <img src={Line} className="line1" alt="img" />
        </div>

        <div className="col-5 ">
          <h3 className=" imgTitle1">{title}</h3>

          <p className="imgPar1">{discription}</p>
          <button className="btn but1" type="submit">
            Explore
          </button>
        </div>

        <div className="col-5 ">
          <img src={Result} className="img11" alt="img" />
        </div>
      </div>
    </>
  );
}

export default Contents;
