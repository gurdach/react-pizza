import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
  return (
    <ContentLoader
    className="pizza-block"
      speed={1}
      width={300}
      height={490}
      viewBox="0 0 300 490"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="278" rx="9" ry="9" width="280" height="30" />
      <rect x="0" y="323" rx="12" ry="12" width="280" height="80" />
      <rect x="131" y="412" rx="22" ry="22" width="143" height="47" />
      <rect x="0" y="426" rx="10" ry="10" width="84" height="30" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
