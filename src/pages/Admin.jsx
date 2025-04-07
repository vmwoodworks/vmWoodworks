import React, { useState } from 'react';

const ItemForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    mainPicture: null,
    secondaryPictures: [],
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    if (name === 'mainPicture') {
      setFormData({ ...formData, mainPicture: e.target.files[0] });
    } else if (name === 'secondaryPictures') {
      setFormData({ ...formData, secondaryPictures: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('mainPicture', formData.mainPicture);
    formData.secondaryPictures.forEach(file => data.append('secondaryPictures', file));

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Item added successfully!');
      } else {
        alert('Failed to add item.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="description" placeholder="Description" onChange={handleInputChange} required />
      <input type="text" name="category" placeholder="Category" onChange={handleInputChange} required />
      <input type="file" name="mainPicture" onChange={handleFileChange} required />
      <input type="file" name="secondaryPictures" multiple onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
