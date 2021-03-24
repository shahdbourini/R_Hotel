import './style.css';
import Line from './Line.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contents2() {
  const [clintID, setClintID] = useState(
    '8cmdwLcB4sqyQv0NzqxyWvowOQLg7sWZcZakuitoMTg'
  );
  const [Result, setResult] = useState();
  const [title, setTitle] = useState();
  const [description, setDisc] = useState();

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/hDbCjHNdF48?client_id=` + clintID)
      .then((res) => {
        console.log(res);
        setResult(res.data.urls.small);
        setTitle(res.data.alt_description);
        setDisc(res.data.description);
      });
  }, []);

  return (
    <div>
      <div className="row1 dist ">
        <div className="col-1 ">
          <img src={Line} className="line" alt="img" />
        </div>

        <div className="col-5 ">
          <h3 className=" imgTitle">{title}</h3>

          <p className="imgPar">{description}</p>
          <button className="btn but" type="submit">
            Explore
          </button>
        </div>

        <div className="col-5 ">
          <img src={Result} className="img22" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Contents2;
