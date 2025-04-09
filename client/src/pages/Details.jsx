import "../css/details.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ITEM } from "../utils/queries";

const Details = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { _id: id },
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use useEffect to set mainImage when data is available
  useEffect(() => {
    if (data && data.item && data.item.mainImage) {
      setMainImage(data.item.mainImage);
    }
  }, [data]);

  if (loading) return (
    <div id="details-div">
      <p>Loading...</p>
    </div>
  );
  
  if (error) return (
    <div id="details-div">
      <p>Error: {error.message}</p>
    </div>
  );

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
    // Scroll to top on mobile when selecting a new image
    if (isMobile) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="details-div">
      <h2 className="heading">Details</h2>
      <div className="details-main-div">
        <img className="details-main-img" src={mainImage} alt="Main" />
        <button id="info-button" onClick={toggleOverlay}>
          i
        </button>
        <div className={`overlay ${isOverlayVisible ? "visible" : ""}`}>
          <p className="details-p">{data.item.description}</p>
          <p className="category-p">Category: {data.item.category}</p>
        </div>
      </div>
      <h2 className="sub-heading">Additional Photos:</h2>
      {data.item.secondaryImages && (
        <div className="details-secondary-div">
          {data.item.secondaryImages.map((image, index) => (
            <img
              key={index}
              onClick={() => handleImageClick(image)}
              src={image}
              alt={`Secondary ${index}`}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;
