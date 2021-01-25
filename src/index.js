const express = require('express'); // importamos 
const {uuid} = require('uuidv4'); // importamos uuid 

const app = express(); // instaciamos/declaramos 

app.use(express.json()); // assim o express começa atratar as requisições como Json.

const projects = [];

app.get('/projects', (requeste, response) => {
        return response.json(projects);
});

app.post('/projects', (request, response) => {
    const { title, owner }  = request.body;
    
    const id = uuid();

    const project = {
        id,
        title,
        owner
    };

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params)
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