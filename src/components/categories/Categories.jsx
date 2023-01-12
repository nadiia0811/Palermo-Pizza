import React from 'react';

export function Categories ({categoryId, onClickCategory}) {
//const [activeIndex, setActiveIndex] = React.useState(0);

const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Cheese'];

 /* const onClickCategory = (index) => {
   setActiveIndex(index);
 } */

    return (
        <div className="categories">
        <ul>
          { categories.map((item, index) => {
           return <li className={categoryId === index ? 'active' : ''}
                      onClick = {() => onClickCategory(index)}
                      key = {index}>{item}</li>           
          }) }
        </ul>
      </div>
    )
}