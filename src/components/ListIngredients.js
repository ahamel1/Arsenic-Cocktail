import React from 'react';

function FullRandom({list}) {
    return (            
        <ul>
            {list.map((item, index) => 
            <li key={index}> {item}
            </li>
            )}
        </ul>
    )
}

export default FullRandom;