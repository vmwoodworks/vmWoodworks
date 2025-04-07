const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vmwoodworks3:Woodworks123@cluster.4bohwrs.mongodb.net/VMWoodworks?retryWrites=true&w=majority&appName=Cluster');

module.exports = mongoose.connection;