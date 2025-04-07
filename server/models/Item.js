const { Schema, model } = require('mongoose');

// Define the schema
const ItemSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  mainImage: {
    type: String, // URL or path to the main image
    required: true, // Main image is required
  },
  secondaryImages: {
    type: [String], // Array of strings for additional image URLs or paths
    default: [], // Default to an empty array if no secondary images are provided
  },
  description: {
    type: String, // Text description of the product or item
    required: true, // Description is required
    maxlength: 1000, // Optional: Limit the length of the description
  },
  category: {
    type: String, // Category of the product or item
    required: true, // Category is required
    // enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Toys', 'Other']
  },
});

// Create the model from the schema
const Item = model('Product', ItemSchema);

module.exports = Item;