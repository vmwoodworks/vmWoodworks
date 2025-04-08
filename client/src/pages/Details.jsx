import React from 'react';
import { useParams } from 'react-router-dom'; // Get route parameters
import { useQuery } from '@apollo/client';
import { GET_ITEM } from '../utils/queries'; // Adjust the path to your query

const Details = () => {
  const { id } = useParams(); // Extract the id parameter from the URL
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { _id: id }, // Pass the id as a variable to the query
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function changeLastZeroToOne(url) {
    return url.replace(/(0)(?=[^0]*$)/, "1");
  }


  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', margin: '20px' }}>
      <img src={changeLastZeroToOne(data.item.mainImage)} alt="Main" style={{ width: '300px', height: '300px' }} />
      <h1>{data.item.category}</h1>
      <p>{data.item.description}</p>
      {/* Render secondary images if available */}
      {data.item.secondaryImages && (
        <div>
          <h3>Additional Images:</h3>
          {data.item.secondaryImages.map((image, index) => (
            <img key={index} src={changeLastZeroToOne(image)} alt={`Secondary ${index}`} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;
