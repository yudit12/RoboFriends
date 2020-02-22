import React from 'react'; 

const Scroll=(props)=> {
    // console.log(props);
    return  (
        // in jsx  use of {{}} first {} js expression wthithin  we return object
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
            {props.children}
            
        </div>
     
    );
};

export default Scroll