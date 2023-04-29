import React, { useState } from 'react';



function Films(props){
    let [count, setCount] = useState(1);
    if(count >=4){
        setCount(0);
    }
    let [img, setImg] = useState(`images/${props.title}/${props.title}${count}.jpg`);
    return(
        <div>
            <button class="btn btn_1" onClick={()=>{setCount(count-1);setImg(`images/${props.title}/${props.title}${count -1}.jpg`)}}>←</button>
            <img className='image' width="250" height="200" src={img} />
            <button class="btn btn_1" onClick={()=>{setCount(count+1);setImg(`images/${props.title}/${props.title}${count +1}.jpg`)}}>→</button>
        </div>
    )
}

export default Films;
