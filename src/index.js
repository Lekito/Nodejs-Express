const express = require('express'); // importamos

const app = express(); // instaciamos/declaramos 

app.get('/projects', (requeste, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'projeto 4'
    ]);
});

app.put('/projects', (request, response) => {
    return response.json([
        'Projeto 5',
        'Projeto 2',
        'Projeto 3',
        'projeto 4'
    ]);
});

app.delete('/projects', (request, response) => {
    return response.json([
        'Projeto 5',
        'Projeto 2',
        'projeto 4'
    ]);
});

app.listen(3333, () => {
    console.log('Backend started! Para desligar pressione Ctrl + c');
}); // definimos em qual porta ira usar