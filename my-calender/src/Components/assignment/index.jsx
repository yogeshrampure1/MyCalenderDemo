import React, { useEffect, useState } from "react";
import { FaIcicles } from "react-icons/fa";

const Assignment = () => {
  const [value, setValue] = useState("");
  const [str, setStr] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    console.log("str", str);
    setStr(value.split(""));
  }, [value]);
  const getColor = (index) => {
    console.log(index);
    if (index % 3 === 0) {
      return "blue";
    }

    return "black";
  };

  return (
    <div>
      <div className="top-bar">Top Bar(Sticky)</div>
      <div
        style={{
          display: "flex",
        }}
      >
        {showSidebar && (
          <div
            style={{
              width: "60px",
              borderRight: "solid 2px",
              height: "700px",
              left: "auto",
            }}
          >
            side bar
          </div>
        )}
        <>
          <button
            style={{ height: "24px", width: "24px" }}
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          >
            <FaIcicles />
          </button>
        </>
        <div style={{ width: "100%", margin: "10px" }}>
          Input <input type="text" onChange={(e) => setValue(e.target.value)} />
          {value && (
            <div className="string-box-container">
              {str.map((index, i) => {
                return (
                  <div
                    key={index}
                    className="string-container"
                    style={{ borderColor: getColor(i + 1) }}
                  >
                    {index}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assignment;
