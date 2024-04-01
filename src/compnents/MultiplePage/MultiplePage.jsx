import { React, useEffect, useState } from "react";

export default function MultiplePage(props) {
  console.log("musltiiiiii", props);
//   let changeimgsrc = props.changeimgevalue;
  let item = props.data;
  let [imagevalue, setimagevalue] = useState("");
  const handelmouseenterchange = (e,i) => {
    console.log("up", e.target.src);
    console.log("index", i);
    props.changeimgevalue(e.target.src);
    // setimagevalue(e.target.src);
  };
  const handelmouseoutchange = (e, i) => {
      props.changeimgevalue("");
    console.log("down", i);
    // setimagevalue("");
  };
//   useEffect(() => {
//     changeimgsrc(imagevalue);
//   }, [handelmouseenterchange, handelmouseoutchange]);
   return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {item.varition.map((item, i) => (
          <div key={i}>
            <div className="card-group">
              <div className="card ha ">
                <img
                  src={item.image}
                  alt="..."
                  style={{ width: 20 + "%" }}
                  onMouseEnter={(e) => handelmouseenterchange(e, i)}
                  onMouseLeave={(e) => handelmouseoutchange(e, i)}
                />
                {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
