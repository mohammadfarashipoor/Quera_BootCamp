import React from "react";
import { BsThreeDots } from "react-icons/bs";
function TrendsCard() {
  const trends = [
    { tag: "#MiningBots" },
    { tag: "#JavaScript" },
    { tag: "#React" },
    { tag: "#NFT Creators" },
    { tag: "#Bitcoin" },
    { tag: "#PWA" },
  ];
  return trends.map((trend, idx) => (
    <div key={idx} className="trend flex justify-between">
      <div>
        <small>داغ ترین ها در جهان </small>
        <h4>{trend.tag}</h4>
      </div>
      <BsThreeDots />
    </div>
  ));
}

export default TrendsCard;
