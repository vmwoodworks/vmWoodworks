import { Link } from "react-router-dom"; 
import '../css/portfolio.css'; 
import React from "react"; 
import { useQuery } from "@apollo/client"; 
import { GET_ITEMS } from "../utils/queries";  

const Portfolio = () => {   
  const { loading, error, data } = useQuery(GET_ITEMS);
      
  if (loading) return <p>Loading...</p>;   
  if (error) return <p>Error: {error.message}</p>;
      
  return (     
    <div id="portfolio-page" className="portfolio-container">       
      <h2 className="heading">Portfolio</h2>       
      <div className="portfolio-div">         
        {data.items.map((item) => (           
          <div className="portfolio-item" key={item._id}>             
            <Link to={`/details/${item._id}`}>               
              <img                 
                src={item.mainImage}                 
                alt="Main"               
              />               
              <div className="overlay">                 
                <p className="details-p">{item.heading}</p>                  
              </div>             
            </Link>           
          </div>         
        ))}       
      </div>     
    </div>   
  ); 
};  

export default Portfolio;