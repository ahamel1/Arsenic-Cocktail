import React from 'react';


function FullRandom(props) {
    return (            
        <ul>
            {props.list.map((item, index) => 
            <li key={index}> {item}
            </li>

            )}
        </ul>
    )
}


export default FullRandom;

