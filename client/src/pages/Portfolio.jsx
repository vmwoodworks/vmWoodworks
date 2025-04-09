import { Link } from "react-router-dom";
import '../css/portfolio.css';
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../utils/queries";

const Portfolio = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  // Improved function to handle Safari differently
  function getImageUrl(url) {
    // Check if user is on Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
      // For Safari, use direct URL instead of redirect
      // This might need adjustment based on your exact URL structure
      return url.replace(/\?dl=0$/, "?dl=1");
    } else {
      // Original logic for other browsers
      return url.replace(/(0)(?=[^0]*$)/, "1");
    }
  }
  
  return (
    <div id="portfolio-page" className="portfolio-container">
      <h2 className="heading">Portfolio</h2>
      <div className="portfolio-div">
        {data.items.map((item) => (
          <div className="portfolio-item" key={item._id}>
            <Link to={`/details/${item._id}`}>
              <img
                src={getImageUrl(item.mainImage)}
                alt="Main"
                onError={(e) => {
                  // Fallback if the image fails to load
                  console.error("Image failed to load:", e.target.src);
                  // You could set a fallback image here
                  // e.target.src = "fallback-image.jpg";
                }}
              />
              <div className="overlay">
                <p className="details-p">{item.description}</p>
                <p className="category-p">{item.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
