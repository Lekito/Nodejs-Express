const express = require('express'); // importamos 
const {uuid} = require('uuidv4'); // importamos uuid 

const app = express(); // instaciamos/declaramos 

app.use(express.json()); // assim o express começa atratar as requisições como Json.

const projects = [];

function logRoutes(request, response, next) {
    const {method, url } = request;

    const route =`[${method.toUpperCase()}] ${url}`;

    console.log(route);

    return next();
}

app.use(logRoutes);

app.get('/projects', (request, response) => {
    const { title } = request.query; // query parametros para mostra algo especifico.

    const results = title // if/else elegante
        ? projects.filter(project => project.title.includes(title))
        : projects; // se não encontrar title retorna a lista completa.
    return response.json(results);
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
    const { id } = request.params;

    const { title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id == id );

    if (projectIndex < 0 ) {
        return response.status(400).json({error: 'Project not found.'});
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id == id );

    if (projectIndex < 0 ) {
        return response.status(400).json({error: 'Project not found.'});
    }    

    projects.splice(projectIndex, 1);

    return response.status(204).json([]);
});

app.listen(3333, () => {
    console.log('Backend started! Para desligar pressione Ctrl + c');
}); // definimos em qual porta ira usar