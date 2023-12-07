const cors = require('cors');
const express = require('express');
const app = express();

console.log('Server starting...');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

let count = 0;

app.use('/', (req, res, next) => {
    count += 1;
    res.status(200).send({count});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
