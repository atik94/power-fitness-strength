import React, {useState } from 'react';
import './Carts.css'
const Carts = ({cart}) => {
    //console.log(cart);
    let total = 0;
    for(const product of cart){
        total = total + product.time;
    }
    const [breaks, setBreak] = useState(0);
    const timeChange=(e)=>{

        let bbb =e.target.value;
        //console.log(bbb);
        //setBreak(bbb);

         localStorage.setItem("item",bbb);
         const getItems = localStorage.getItem("item");
         setBreak(getItems);
    }
    return (
        <div className='cart'>
            <h2>order summary</h2>
            <p>Selected items : {cart.length}</p>
            <p>price : {total}s</p>
            <div>
                <input onClick={timeChange} type="text" value={10} />
                <input onClick={timeChange} type="text" value={20} />
                <p>{breaks}</p>
                
            </div>
        </div>
    );
};

export default Carts;