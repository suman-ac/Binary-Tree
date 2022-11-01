import React, { useCallback, useEffect, useState } from "react";
import { Node, Trees } from "./Logic";

const Tree = ({ data, children }) => {
  const [showChildren, setShowChildren] = useState(false);
  const handleClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren, setShowChildren]);
  const childHandler = (e) => {
    const text = e.target.textContent;
if(text.includes('🍂')){
  localStorage.setItem("disable","true")
}
else{

  localStorage.setItem("disable","false")
  localStorage.setItem("node", text)
}
  };
  return (
    <div>
      <span onClick={handleClick} style={{color:"black",fontSize:"18px"}}>
        <h4
          onClick={childHandler}
          style={{ fontWeight: showChildren ? "bold" : "normal" }}
        >
          {data}
        </h4>
      </span>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          left: 25,
          borderLeft: "1px solid",
          paddingLeft: 10,
          cursor: "pointer",
          color:"black",
          fontSize:"18px",
        }}
      >
        {showChildren && (children ?? []).map((node) => <Tree {...node} />)} 
      </div>
    </div>
  );
};

export default Tree;
