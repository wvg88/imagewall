import "./App.css";
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { storage } from './firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Draggable from "react-draggable";



function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imagelist, setImagelist] = useState([]);

  const [imagePositions, setImagePositions] = useState(null);
  

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) =>{
      getDownloadURL(snapshot.ref).then((url) => {setImagelist((prev) => [...prev, url])})
      
    })
  };
  
  useEffect(() => {
    const imageListRef = ref(storage, "images/");
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagelist((prev) => [...prev, url]);
        })
      })
    })
  }, []);





 
  return (
    <div className="App">
      
      <input 
      type="file" 
      onChange={(event) => {
        setImageUpload(event.target.files[0])
        }} />
      <button onClick={uploadImage}> Upload Image </button>
     
        <div className="image-container">
        
      {imagelist.map((url) => {
        
        return (<Draggable
  >
          <img src={url} />
          </Draggable>
        )
        
      })} 
      
      </div>
      
    </div>
  );
}

export default App;


