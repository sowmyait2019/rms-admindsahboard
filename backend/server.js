const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json()); // it is require for get data from request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/book-eventdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected to MongoDb");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
connectToDB();
// const Offer = mongoose.model('Offer', {
//   name: String,
//   discount: Number
// });
// app.get('/offers', async (req, res) => {
//   try {
//     const offers = await Offer.find();
//     res.json(offers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
//
// app.post('/offers', async (req, res) => {
//   try {
//     const { name, discount } = req.body;
//     const newOffer = new Offer({ name, discount });
//     await newOffer.save();
//     res.status(201).json(newOffer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
//
// app.put('/offers/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, discount } = req.body;
//     const updatedOffer = await Offer.findByIdAndUpdate(id, { name, discount }, { new: true });
//     res.json(updatedOffer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
//
// app.delete('/offers/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Offer.findByIdAndDelete(id);
//     res.json({ message: 'Offer deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
// const orderSchema = new mongoose.Schema({
//   order: String,
//   orderdetails: String,
//   payment: String
//
//   // Add other fields as needed
// });


// const OrderModel = mongoose.model('Order', orderSchema, 'orders');
//
// app.get('/api/orders', async (req, res) => {
//   try {
//     const data = await OrderModel.find();
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

const bookSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  persons:Number,
  date:String
  // Add other fields as needed
});

const BookModel = mongoose.model('Book', bookSchema, 'books');


app.get('/api/books', async (req, res) => {
  try {
    const data = await BookModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const contactSchema = new mongoose.Schema({
  Name: String,
  MobileNumber: Number,
  EmailAddress: String,

  // Add other fields as needed
});


const ContactModel = mongoose.model('Contact', contactSchema, 'contacts');


app.post('/api/contacts', async (req, res) => {
  try {
    const newContact = new ContactModel(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.get('/api/contacts', async (req, res) => {
  try {
    const data = await ContactModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await ContactModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Delete a contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ContactModel.findByIdAndDelete(id);
    res.status(204).end(); // No content, successful deletion
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const eventSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  persons: { type: Number, required: true },
  date: String,
});


const EventModel = mongoose.model('Event', eventSchema, 'events');

// Route to fetch event data
app.get('/events/book-event', async (req, res) => {
  try {
    const events = await EventModel.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
''
const loginSchema = new mongoose.Schema({
  email: String,
  password: String
});

const LoginModel = mongoose.model('login', loginSchema, 'login');

app.get('/api/login', async (req, res) => {
  try {
    const data = await LoginModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log("server is started successfully");
});
