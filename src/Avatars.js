import React from 'react';
import './avatarstyles.css' // check on size of images 

const Avatars = (props) => {
    return ( 
        <div className=" avatarstyles ma4 bg-light-red dib pa3 grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
            <p>Name: {props.name}</p>
            <p>Title: {props.title}</p>
        </div> 
    );
}
 
export default Avatars;
  






