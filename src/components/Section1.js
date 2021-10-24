import React from "react";
import Masonry from "react-masonry-css";

function Section1(props) {
  const images = props.images.map(image => {
    return (
      <div className="section1-image">
        <img src={image.img} alt="section1-grid-placeholder" />
        <div className="section1-image-overlay">
          <div className="section1-image-details">
            <div className="section1-image-icon">
              <img src="/img/sect1.png" alt="sect1-eye" />
            </div>
            <div className="section1-image-title">{image.title}</div>
          </div>
        </div>
      </div>
    );
  });

  // Grid Breakpoint
  const responsive = { default: 3, 920: 2, 740: 1 };

  return (
    <div className="sections__menu section1-content">
      <Masonry 
        breakpointCols={responsive}
        className="vd-masonry-grid"
        columnClassName="vd-masonry-grid_column"
      >
       {images}
      </Masonry>
    </div>
  );
}
export default Section1;
