import { AddButton } from "../button/AddButton";
import React from 'react';


export function PizzaBlock ({title, price, imageUrl, sizes, types}) {
  const typeNames = ['thin','traditional'];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

    return (
    <>
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
                    className={activeType === index ? 'active' : ''}
                    onClick={() => setActiveType(index)}>{typeNames[type]}</li>
              ))}
            </ul>
            <ul>

              {sizes.map((size, index) => (
                <li key={index}
                    className={activeSize === index ? 'active' : ''}
                    onClick = {() => setActiveSize(index)}>{size} cm.</li>
              ))}
            </ul>
        </div>
        <div className="pizza-block__bottom">
           <div className="pizza-block__price">from {price} $</div>
              <AddButton />
            </div>
           </div>  
    </>
    )
}