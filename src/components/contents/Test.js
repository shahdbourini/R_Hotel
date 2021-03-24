
import React, { useState, useEffect } from "react";
import axios from 'axios';

function  Test () {

//   const [photo,setPhoto]=useState("");
  const [clindID , setClintID] = useState("8cmdwLcB4sqyQv0NzqxyWvowOQLg7sWZcZakuitoMTg");
  const [Result, setResult]=useState([]);
  



  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/w72a24brINI?client_id=`+clindID)
    .then(res => {
        console.log(res);
        setResult(res.data.urls.small );
    
    })
}, []);

  



  return (   
                <div>
         <img src={Result} alt="img"/>  
     
      </div>           

  );
}

export default Test;
