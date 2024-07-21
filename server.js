const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Данные из JSON файла
const data = [
    { email: 'jim@gmail.com', number: '221122' },
    { email: 'jam@gmail.com', number: '830347' },
    { email: 'john@gmail.com', number: '221122' },
    { email: 'jams@gmail.com', number: '349425' },
    { email: 'jams@gmail.com', number: '141424' },
    { email: 'jill@gmail.com', number: '822287' },
    { email: 'jill@gmail.com', number: '822286' }
];

let currentRequest = null;

app.post('/search', (req, res) => {
  

    currentRequest = setTimeout(() => {
        const searchParams = req.body;
        const result = data.filter(item => {
            return item.email === searchParams.email && (!searchParams.number || item.number.includes(searchParams.number.replace(/-/g, '')));
        });
        res.json(result);
        currentRequest = null;
    }, 5000); // Задержка в 5 секунд
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
});

