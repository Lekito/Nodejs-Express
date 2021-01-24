const express = require('express'); // importamos

const app = express(); // instaciamos/declaramos 

app.get('/projects', (requeste, response) => {
    return response.json({
        message: 'Hello Dev!'
    });
});

app.listen(3333, () => {
    console.log('Backend started! Para desligar pressione Ctrl + c');
}); // definimos em qual porta ira usar