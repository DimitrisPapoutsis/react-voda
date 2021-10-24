import React from "react";

function Page2(props) {
  const tiles = props.tiles.map(tile => {
    return (
      <div className="tile">
        <div className="tile-icon">
          <img src={`/img/${tile.icon}.png`} alt="" />
        </div>
        <div className="tile-title">{tile.title}</div>
        <div className="tile-description">{tile.description}</div>
        <a className="tile-link" href="https://www.vodafone.gr/">
          {tile.link}
        </a>
      </div>
    );
  });

  return (
    <div className="page2">
      <h1 className="page-title" >{props.description}</h1>
      <div className="page-comp">
        <div className="tiles">{tiles}</div>
      </div>
    </div>
  );
}
export default Page2;
