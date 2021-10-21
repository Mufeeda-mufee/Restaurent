import React from 'react';

const Categories = ({category,filterItems}) => {
  return (
  <div className="btn-container">
    {category.map((categry,index)=>{
    
    return (<button type="button"
      className="filter-btn"
      key={index}
       onClick={()=>filterItems(categry)}>{categry}
       </button>
       );
 } )}
  
   

  </div>
  );
};

export default Categories;
