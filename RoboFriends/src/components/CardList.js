import React from 'react';
import Card from './Card';


// create card list of robots dynamically  
// key = id for  each robots  the second id its for the images of the robot
const CardList = ({robots}) => {
    const cardArray= robots.map((user,i) =>{
    return (
        <Card key={i}
        id ={robots[i].id }
        name={robots[i].name}
        email={robots[i].email}
        />   
         ); 
    })

    return (
        <div>
           {cardArray}
        </div>

    );
}

export default  CardList;