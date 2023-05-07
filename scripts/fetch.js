const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a Mongoose model for student data
const Student = mongoose.model('Student', {
  name: String,
  Enroll: String
});

// Route to fetch student data
app.get('/students', (req, res) => {
  // Retrieve name and roll number from the database
  Student.find({}, 'name Enroll')
    .then((students) => {
      res.json(students);
    })
    .catch((error) => {
      console.error('Error retrieving student data:', error);
      res.status(500).send('Error retrieving student data');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});