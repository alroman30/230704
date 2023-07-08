const express = require(`express`)
const mongoose = require(`mongoose`)
const cors = require('cors')

const courseRoutes = require('./routes/courseRoutes')

const app = express();

mongoose.connect('mongodb+srv://admin:admin@sandbox.fdqvlpc.mongodb.net/an22_sample_database?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open',()=> console.log('Now connected to MongoDB Atlas'));

//allows all resources to access our backend application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/course', courseRoutes)

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server Running on Localhost:${process.env.PORT ||4000}`)
});
