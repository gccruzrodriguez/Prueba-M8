const express = require("express");
const path = require("path");  
const app = express(); 
const port = 3000;


app.use(express.static("public"));


app.get("/contact", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'contact.html')); 
});

app.get("/", (req, res) => 
    res.status(200).sendFile(path.join(__dirname, 'public', 'home.html')); 
});

app.listen(port, () => {
    console.log(`Servidor escuchando en: http://localhost:${port}`);
});

