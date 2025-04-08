import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM_MUTATION } from '../utils/mutations'; // Import your mutation
import '../css/admin.css';

const Admin = () => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    mainPicture: '',
    secondaryPictures: [],
  });

  const [addItem] = useMutation(ADD_ITEM_MUTATION);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'secondaryPictures') {
      // Split the input into an array of URLs for secondary pictures
      setFormData({ ...formData, secondaryPictures: value.split(',').map((url) => url.trim()) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addItem({
        variables: {
          mainImage: formData.mainPicture,
          secondaryImages: formData.secondaryPictures,
          description: formData.description,
          category: formData.category,
        },
      });

      if (data) {
        alert('Item added successfully!');
        console.log('Added item:', data.addItem);
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item.');
    }
  };

  return (
    <form className='admin-form' onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
        <label>Category (example: Kitchen, Bath, Cabinet)</label>
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleInputChange}
        required
      />

      </div>
      <div>
<label>Main Picture URL </label>
      <input
        type="text"
        name="mainPicture"
        placeholder="Main Image URL"
        value={formData.mainPicture}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
<label>Additional Pictures (example: link1, link2) <span style={{color: 'red'}}>COMMA-SEPARATED!</span></label>
      <textarea
        name="secondaryPictures"
        placeholder="Secondary Image URLs (comma-separated)"
        value={formData.secondaryPictures.join(', ')}
        onChange={handleInputChange}
      />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Admin;



