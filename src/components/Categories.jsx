import React from "react";

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {
  
 

  console.log("render categories");

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => {
            onClickItem(null);
          }}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => {
            return (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => {
                  onClickItem(index);
                }}
                key={`${index}_${name}`}
              >
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
