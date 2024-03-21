require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;
const apiKey = process.env.API_KEY;

const imagesDirectory = `${__dirname}/public/images/gallery/`;
app.use('/images', express.static(imagesDirectory));

app.get('/api/images/:imageName', (req, res) => {
    const requestApiKey = req.query.apikey;

    if (!requestApiKey || requestApiKey !== apiKey) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const imageName = req.params.imageName;
    res.sendFile(path.join(imagesDirectory, imageName));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
