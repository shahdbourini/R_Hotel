import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function FaContents(props) {
  const [clintID, setClintID] = useState(
    '8cmdwLcB4sqyQv0NzqxyWvowOQLg7sWZcZakuitoMTg'
  );
  const [Result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=hotels&page=1&per_page=6&client_id=${clintID}`
      )
      .then((res) => {
        console.log(res);
        setResult(res.data.results);
      });
  }, [clintID]);

  return (
    <div className="test_fa">
      <div className=" distance_fa ">
        {Result.map((photo) => (
          <div className="row top-buffer ">
            <figure className="figure_fa">
              <img src={photo.urls.regular} className="img_fa" alt="img" />

              <figcaption className="caption_fa">
                {photo.alt_description}{' '}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaContents;
