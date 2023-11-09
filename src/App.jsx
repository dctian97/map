import { useState } from "react";
import React from 'react';
import img1 from './images/pic1.jpg'
import img2 from './images/pic2.jpg'
import img3 from './images/pic3.jpg'
import img4 from './images/pic4.jpg'
import img5 from './images/pic5.jpg'
export default function App() {
    const images = [
        {url:img1, alt:'Closeup of a human eye'},
        {url:img2, alt:'Rock that looks like a wave'},
        {url:img3, alt:'Purple and white pansies'},
        {url:img4, alt:'Section of wall from a pharoah\'s tomb'},
        {url:img5, alt:'Large moth on a leaf'},
        ];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [name, setName] = useState("Darken");
    const [cName, setCName] = useState("dark");
    const [col, setCol] = useState("");
    function clickImg(img) {
        setSelectedImage(img);
    }
    function clickButton() {
        if(cName === "dark") {
            setName("Lighten");
            setCName("light");
            setCol("rgba(0, 0, 0, 0.5)");
        }
        if(cName === "light") {
            setName("Darken");
            setCName("dark");
            setCol("rgba(0, 0, 0, 0)");
        }
    }
    return (
        <>
            <h1>Image gallery example</h1>
            <div className="full-img">
                <img className="displayed-img" key={selectedImage.alt} src={selectedImage.url} alt={selectedImage.alt} />
                <div className="overlay" style={{backgroundColor:col}} ></div>
                <button onClick={clickButton} className={cName}>{name}</button>
                <img src='' />
            </div>
            <div className="thumb-bar">
                {images.map((img) => {
                    return (
                        <img onClick={() => clickImg(img)} key={img.alt} src={img.url} alt={img.alt} />
                    );
                })}
            </div>
        </>
    );
}