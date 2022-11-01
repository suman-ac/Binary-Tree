import { useState } from "react";
import AddNodes from "./Form";
import Tree from "./Tree";
const Home = () => {
  const [traversedData, setTraversedData] = useState([]);

  return (
    <div>
            <nav>
        <h1 style={{ textAlign:'center' }}>
          Tree structure 
        </h1>
      </nav>
      <div
        className="flex"
        style={{
          display: "flex",
          minWidth: "100vw",
          justifyContent: "space-around",
        }}
      >
        <Tree {...traversedData} style={{ minWidth: "50%" }} />
        <AddNodes
          setTraversedData={setTraversedData}
          style={{ minWidth: "50%"}}
        />
      </div>
    </div>
  );
};

export default Home;
