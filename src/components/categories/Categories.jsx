import React from 'react';

export function Categories ({categoryId, onClickCategory}) {


const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Cheese'];

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