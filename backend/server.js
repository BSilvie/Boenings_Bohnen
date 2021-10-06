require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: false }));


// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;

// load schemes
const TemperatureItem = require('./models/Temperature');

app.get('/', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
