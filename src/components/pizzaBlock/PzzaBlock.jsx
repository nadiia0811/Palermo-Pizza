import React, { useState } from "react";
import { AddButton } from "../button/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";


export const PizzaBlock  = ({id, title, price, imageUrl, sizes, types})  => { 
 
  const typeNames = ["thin","traditional"];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();

  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0;
  
  
  const onClickAdd = () => {  
   const item = {
    id,
    title, 
    price,
    imageUrl,
    type: typeNames[activeType],
    size: sizes[activeSize]
   }
   
   dispatch(addItem(item)); //item = action.payload in cartSlice
  }

    return (
    <div className="pizza-block-wrapper">
        <div className="pizza-block">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza" />
          
          <h4 className="pizza-block__title">{title}</h4>
          <div className="pizza-block__selector">
            <ul>
              {types.map((type, index) => (
                <li key={index} 
                    className={activeType === index ? "active" : ""}
                    onClick={() => setActiveType(index)}>{typeNames[type]}</li>
              ))}
            </ul>
            <ul>

              {sizes.map((size, index) => (
                <li key={index}
                    className={activeSize === index ? "active" : ""}
                    onClick = {() => setActiveSize(index)}>{size} cm.</li>
              ))}
            </ul>
        </div>
        <div className="pizza-block__bottom">
           <div className="pizza-block__price">from {price} $</div>
              <AddButton onClickAdd={onClickAdd} count = {addedCount} />
            </div>
           </div>  
    </div>
    )
}