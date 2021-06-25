import React from 'react';

//here if i put a new dishes with an other new category in my data.js file, everything is synch and we don't need to manually add new stuffs. 
const Categories = ({categories ,filterItems}) => {
  return <div className="btn-container">
    {categories.map((category, index) => {
      return <button type='button' className='filter-btn' key={index} onClick={() => filterItems(category) }>
        {category}
        </button>
    })}
  </div>
};

export default Categories;
