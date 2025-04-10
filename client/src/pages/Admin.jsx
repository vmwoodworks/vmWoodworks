import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ITEM_MUTATION, DELETE_ITEM_MUTATION } from '../utils/mutations';
import { GET_ITEMS } from '../utils/queries';
import '../css/admin.css';

// Function to transform Dropbox URL for better compatibility across browsers
const changeDropboxUrlFormat = (url) => {
  // Check if this is a Dropbox URL
  if (url.includes('dropbox.com')) {
    // Replace dl=0 with raw=1
    let newUrl = url;
    
    // Replace dl=0 or any other dl value with raw=1
    newUrl = newUrl.replace(/dl=[0-9]/, 'raw=1');
    
    return newUrl;
  }
  
  // Return unchanged URL if not from Dropbox
  return url;
};

const Admin = () => {
  // State for passcode protection
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('add'); // 'add' or 'delete'
  
  // Correct passcode - in a real application, this should be handled securely
  // and not hard-coded in the component
  const CORRECT_PASSCODE = '3140';

  const [formData, setFormData] = useState({
    description: '',
    category: '',
    mainPicture: '',
    secondaryPictures: [],
  });
  
  const [addItem] = useMutation(ADD_ITEM_MUTATION);
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    refetchQueries: [{ query: GET_ITEMS }]
  });
  
  // Query to get all items
  const { loading, error: queryError, data, refetch } = useQuery(GET_ITEMS);
  const items = data?.items || [];
  
  const handlePasscodeChange = (e) => {
    setPasscode(e.target.value);
    setError('');
  };
  
  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setAuthenticated(true);
    } else {
      setError('Incorrect passcode. Access denied.');
      setPasscode('');
    }
  };

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
    
    // Process URLs before submitting - change format for better cross-browser compatibility
    const processedMainImage = changeDropboxUrlFormat(formData.mainPicture);
    const processedSecondaryImages = formData.secondaryPictures.map(url => changeDropboxUrlFormat(url));
    
    try {
      const { data } = await addItem({
        variables: {
          mainImage: processedMainImage,
          secondaryImages: processedSecondaryImages,
          description: formData.description,
          category: formData.category,
        },
      });
      
      if (data) {
        alert('Item added successfully!');
        // Reset form
        setFormData({
          description: '',
          category: '',
          mainPicture: '',
          secondaryPictures: [],
        });
        // Refresh items list
        refetch();
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item.');
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const { data } = await deleteItem({
          variables: { id },
        });
        
        if (data) {
          alert('Item deleted successfully!');
          refetch();
        }
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item.');
      }
    }
  };
  
  // Render passcode form if not authenticated
  if (!authenticated) {
    return (
      <div className="passcode-container">
        <h2>Admin Access</h2>
        <form onSubmit={handlePasscodeSubmit}>
          <div>
            <label>Enter Passcode:</label>
            <input
              type="password"
              value={passcode}
              onChange={handlePasscodeChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Access Admin Panel</button>
        </form>
      </div>
    );
  }

  // Render admin panel if authenticated
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <button onClick={() => setAuthenticated(false)} className="logout-button">
          Log Out
        </button>
      </div>
      
      <div className="admin-tabs">
        <button 
          className={activeTab === 'add' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('add')}
        >
          Add Item
        </button>
        <button 
          className={activeTab === 'delete' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('delete')}
        >
          Delete Items
        </button>
      </div>
      
      {activeTab === 'add' ? (
        <form className='admin-form' onSubmit={handleSubmit}>
          <div>
            <label>Description</label>
            <textarea
            className='desc-input-form'
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
            <label>Main Picture URL</label>
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
      ) : (
        <div className="items-list-container">
          <h3>All Items</h3>
          {loading ? (
            <p>Loading items...</p>
          ) : queryError ? (
            <p className="error-message">Error loading items: {queryError.message}</p>
          ) : items.length === 0 ? (
            <p>No items found.</p>
          ) : (
            <div className="items-list">
              {items.map((item) => (
                <div key={item._id} className="item-card">
                  <div className="item-image">
                    <img src={item.mainImage} alt={item.description} />
                  </div>
                  <div className="item-details">
                    <h4>Category: {item.category}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="item-actions">
                    <button 
                      className="delete-button" 
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;