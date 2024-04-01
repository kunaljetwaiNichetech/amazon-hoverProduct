// import React, { useState } from "react";
// import './HomePage.css'
// import MultiplePage from "../MultiplePage/MultiplePage";
// import { Link } from "react-router-dom";
// export default function HomePage({ data }) {
//     // let [changeimgsrc,setchangeimgsrc]=useState('')
//     // function changeimgevalue (val){
//     //     setchangeimgsrc(val)
//     //     // console.log(val)
//     // }


//    let [imagevalue, setimagevalue] = useState("");
//    const handelmouseenterchange = (e, i) => {
//     console.log("iiiii",i)
//      console.log("up", e.target.src);
//      console.log("index", i);
//      setimagevalue(e.target.src);
//      // setimagevalue(e.target.src);
//    };
//    const handelmouseoutchange = (e, i) => {
//      setimagevalue("");
//      console.log("down", i);
//      // setimagevalue("");
//    };
//   return (
//     <div>
//       {data.map((item, i) => (
//         <div key={i}>
//           <div>
//             <div className="card">
//               <img
//                 // src={item.varition[0].image}
//                 src={imagevalue == "" ? item.varition[0].image : imagevalue}
//                 className="card-img-top"
//                 alt="..."
//                 style={{ width: 20 + "%" }}
//               />
//               <h1>{item.ProductTitle}</h1>
//               {/* <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     </div>
//     <div className="card-footer">
//       <small className="text-body-secondary">Last updated 3 mins ago</small>
//     </div> */}
//               {/* <MultiplePage data={item} changeimgevalue={changeimgevalue} /> */}
//               <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//                 {item.varition.map((item, i) => (
//                   <div key={i}>
//                     <div className="card-group">
//                       <div className="card ha ">
//                         <img
//                           src={item.image}
//                           alt="..."
//                           style={{ width: 20 + "%" }}
//                           onMouseEnter={(e) => handelmouseenterchange(e, item)}
//                           onMouseLeave={(e) => handelmouseoutchange(e, item)}
//                         />
//                         {/* <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">
//                       This is a wider card with supporting text below as a
//                       natural lead-in to additional content. This content is a
//                       little bit longer.
//                     </p>
//                   </div>
//                   <div className="card-footer">
//                     <small className="text-body-secondary">
//                       Last updated 3 mins ago
//                     </small>
//                   </div> */}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div>
//             <Link to={`/details/${item}`}>
//               <button>See More</button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import {React ,useState}from 'react'
import { AmazonTshirtJSON } from '../Data'
import { Link } from 'react-router-dom';
export default function HomePage() {

  console.log(AmazonTshirtJSON)
  
     let [imagevalue, setimagevalue] = useState({
      chId:'',
      chImg:''
     });
  const handelmouseenter=(e,i)=>{
    // let d=AmazonTshirtJSON.filter((w)=>w.id==i+1)
    // console.log("ddddddddddd  ",d)
    setimagevalue({
      chId:i,
      chImg:e.target.src
    })

  }
  // const handelmouseleave=(e,i)=>{
  //   console.log(e)
  //   setimagevalue({
  //     chId: '',
  //     chImg: '',
  //   });
  // }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {AmazonTshirtJSON.map((item, i) => (
        <div
          key={i}
          style={{
            border: 1 + "px solid black",
            width: 50 + "% ",
            padding: 10 + "px",
            margin: 10 + "px",
          }}
        >
          {i !== imagevalue.chId ? (
            <img
              src={item.varition[0].image}
              alt=""
              style={{ width: 20 + "%" }}
            />
          ) : (
            <img src={imagevalue.chImg} alt="" style={{ width: 20 + "%" }} />
          )}
          <br></br>

          <h5>{item.ProductTitle}</h5>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {item.varition.map((single) => (
              <div>
                <img
                  src={single.image}
                  alt=""
                  style={{ width: 20 + "%" }}
                  onMouseEnter={(e) => handelmouseenter(e, i)}
                  // onMouseLeave={(item) => handelmouseleave(item, i)}
                />
              </div>
            ))}
          </div>
          <div>
            
          <Link to="Details" state={item}>
            <button>See More</button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
