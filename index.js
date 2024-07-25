import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/detail',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));

})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'start.html'));

});

app.listen(port, () => {
    console.log("Successfully running on port " + port);
});
