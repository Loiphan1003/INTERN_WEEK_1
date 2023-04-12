const express =  require('express');
const bodyParser = require('body-parser')
const port = 5000;
const app = express();
const cors = require('cors')


const userRoute = require('./routes/user');

app.use(bodyParser.json())
app.use(cors({ origin: true, credentials: true }));

app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`API đang chạy ở cổng ${port}`);
})