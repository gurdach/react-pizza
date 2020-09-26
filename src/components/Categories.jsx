import React from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  console.log("render categories");

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => {
            onSelectItem(null);
          }}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => {
            return (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => {
                  onSelectItem(index);
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
