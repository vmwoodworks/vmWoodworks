const { Item } = require("../models");
const mongoose = require("mongoose");
mongoose.set("strictPopulate", false);

const resolvers = {
    Query: {
        items: async () => {
            return await Item.find({});
        },
        item: async (parent, { _id }) => {
            return await Item.findById(_id);
        },
    },
    Mutation: {
        addItem: async (_, args) => {
            try {
                // Create a new item object using the arguments passed to the mutation
                const newItem = new Item({
                    _id: args._id, // ID of the item
                    mainImage: args.mainImage, // Main image URL
                    secondaryImages: args.secondaryImages || [], // Secondary images (optional)
                    heading: args.heading,
                    description: args.description, // Description of the item
                    category: args.category, // Category of the item
                });
                
                // Save the new item to the database
                const savedItem = await newItem.save();
                
                // Return the saved item
                return savedItem;
            } catch (error) {
                console.error("Error adding item:", error);
                throw new Error("Failed to add item");
            }
        },
        deleteItem: async (_, { _id }) => {
            try {
                // Find and delete the item by ID
                const deletedItem = await Item.findByIdAndDelete(_id);
                
                // If no item was found with that ID
                if (!deletedItem) {
                    throw new Error(`Item with ID ${_id} not found`);
                }
                
                // Return the deleted item
                return deletedItem;
            } catch (error) {
                console.error("Error deleting item:", error);
                throw new Error(`Failed to delete item: ${error.message}`);
            }
        },
    },
};

module.exports = resolvers;