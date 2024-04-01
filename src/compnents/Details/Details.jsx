import React from "react";
import { useState } from "react";
import { useLocation} from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function Details() {
  let location = useLocation();
  // console.log("loaction . state", location.state);
  let detailsItem = [];
  detailsItem.push(location.state);

  const words = ["spray", "elite", "exuberant", "destruction", "present"];
  // filtered  arry on baie of id
  // const result = data.filter((word) => word.id == id.id);

  // console.log(result)
  //  let [filterreddata,setfilterreddata]=useState([])
  // debugger
  //    console.log("this si filtered array",filtered)

  let [imagevalue, setimagevalue] = useState({
    chId: "",
    chImg: "",
    chprice: "",
    chdisc: "",
    chcolor: "",
    chsize: "",
  });
  const handelmouseenter = (e, i) => {
    // let d=AmazonTshirtJSON.filter((w)=>w.id==i+1)
    // console.log("ddddddddddd  ",d)
    console.log("onhovereeeeeeee", e);
    setimagevalue({
      chId: i,
      chImg: e.image,
      chprice: e.price,
      chdisc: e.discountPercentage,
      chcolor: e.color,
      chsize: e.size,
    });
  };
  const handelmouseleave = (e, i) => {
    console.log(e);
    setimagevalue({
      chId: "",
      chImg: "",
    });
  };
  return (
    <div>
      <div>
        {detailsItem.map((item, i) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              key={i}
              style={{
                width: 60 + "% ",
                padding: 10 + "px",
                margin: 10 + "px",
              }}
            >
              {i !== imagevalue.chId ? (
                <img
                  src={item.varition[0].image}
                  alt=""
                  style={{ width: 40 + "%" }}
                />
              ) : (
                <img
                  src={imagevalue.chImg}
                  alt=""
                  style={{ width: 40 + "%" }}
                />
              )}
              <br></br>
              <h5>{item.ProductTitle}</h5>
              <h6>
                price:
                {i !== imagevalue.chId
                  ? item.varition[0].price
                  : imagevalue.chprice}
              </h6>
              <h6>
                Discount:
                {i !== imagevalue.chId
                  ? item.varition[0].discountPercentage
                  : imagevalue.chdisc}
              </h6>
            </div>
            <div>
              <hr></hr>
              Rating:
              {Array(item.rating)
                .fill()
                .map((_, i) => {
                  // const ratingValue = i + 1;
                  return (
                    <div style={{display:'inline-flex'}}>
                      <AiFillStar
                        className="star"
                        color={"#ffc107"}
                        size={25}
                      />
                    </div>
                  );
                })}
              {/* <i class="fas fa-star" /> */}
              <hr></hr>
              <h6>
                color:
                {i !== imagevalue.chId
                  ? item.varition[0].color
                  : imagevalue.chcolor}
              </h6>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {item.varition.map((single) => (
                  <div>
                    <img
                      src={single.image}
                      alt=""
                      style={{ width: 20 + "%" }}
                      onMouseEnter={() => handelmouseenter(single, i)}
                      onMouseLeave={() => handelmouseleave(single, i)}
                    />
                  </div>
                ))}
              </div>
              <hr></hr>
              Size:
              {i !== imagevalue.chId
                ? item.varition[0].size
                : imagevalue.chsize}
              <hr></hr>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
