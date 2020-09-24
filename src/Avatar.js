import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist.js';
import 'tachyons';

const Avatar = (props) => {
    return  ( <div> 
        <h1> Welcome to my avatars </h1>
           <Avatarlist id="1" name="Saumya" work="Web Developer"/>
           <Avatarlist id="2" name="Ayushii" work="Topper"/>
           <Avatarlist id="3" name="Aman" work="Coder"/>
           
        <button>Beware of Team Vision</button>
        </div>
    )
}

export default Avatar;