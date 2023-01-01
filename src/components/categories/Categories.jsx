import React from 'react';

export function Categories () {
const [activeIndex, setActiveIndex] = React.useState(0);

const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

 const onClickCategory = (index) => {
   setActiveIndex(index);
 }

    return (
        <div className="categories">
        <ul>
          { categories.map((item, index) => {
           return <li className={activeIndex === index ? 'active' : ''}
                      onClick = {() => onClickCategory(index)}
                      key = {index}>{item}</li>           
          }) }
        </ul>
      </div>
    )
}