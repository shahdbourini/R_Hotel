import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import circle from './circle.png';
// import Facilities from '../components/facilities/FaContents';

function RoContents() {
  const [clintID, setClintID] = useState(
    '8cmdwLcB4sqyQv0NzqxyWvowOQLg7sWZcZakuitoMTg'
  );
  const [Result, setResult] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/VGs8z60yT2c?client_id=` + clintID)
      .then((res) => {
        //   setResult(res.data.urls.small );
        setResult((Result) => [...Result, res.data.urls.regular]);
        setTitle((title) => [...title, res.data.alt_description]);
      });

    axios
      .get(`https://api.unsplash.com/photos/tqwvsyL2Kd0?client_id=` + clintID)
      .then((res) => {
        //   setResult(res.data.urls.small );
        setResult((Result) => [...Result, res.data.urls.regular]);
        setTitle((title) => [...title, res.data.alt_description]);
        console.log(Result);
      });
  }, []);

  return (
    <div className="test_fa">
      <div className=" distance ">
        {Result.map((photo) => (
          <div className="row ">
            <figure className="figure_room">
              <img src={photo} className="img_room" alt="img" />
              {title.map((disc) => (
                <figcaption className="caption_room">{disc} </figcaption>
              ))}
              <img src={circle} className="icon" alt="img" />
              <span className="plus">+</span>
              <label className="view-plus">VIEW ROOM DITEALS</label>
              <button className="btn butt">$147 Avg/hight</button>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoContents;
