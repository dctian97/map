import { useState } from "react";
import React from 'react';
export default function App() {
    const images = [
        {url:'images/pic1.jpg', alt:'Closeup of a human eye'},
        {url:'images/pic2.jpg', alt:'Rock that looks like a wave'},
        {url:'images/pic3.jpg', alt:'Purple and white pansies'},
        {url:'images/pic4.jpg', alt:'Section of wall from a pharoah\'s tomb'},
        {url:'images/pic5.jpg', alt:'Large moth on a leaf'},
        ];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [name, setName] = useState("Darken");
    const [cName, setCName] = useState("dark");
    const [col, setCol] = useState("");
    function clickImg(img) {
        setSelectedImage(img);
        console.log(img);
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
                <img className="displayed-img" key={selectedImage.alt} src={'./' + selectedImage.url} alt={selectedImage.alt} />
                <div className="overlay" style={{backgroundColor:col}} ></div>
                <button onClick={clickButton} className={cName}>{name}</button>
            </div>
            <div className="thumb-bar">
                {images.map((img) => {
                    return (
                        <img onClick={() => clickImg(img)} key={img.alt} src={'./' + img.url} alt={img.alt} />
                    );
                })}
            </div>
        </>
    );
}