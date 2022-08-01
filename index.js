'use strict'
/* esLint-env node, es6 */

//importe le packet express
const express = require ('express');
const app = express();
const http = require('http');
const server = http.createServer(app)
const { Server } = require('socket.io');
//Créer une application express

// importer la logique de la page d'accueil
const genererModele = require('./pages/page-get.js');



const io = new Server(server)

const PORT = 6300;


//const NOM_PAGES = {
//'contactez-moi': 'contact',
//'exemple de page chat': 'chat',
//}
//Ecoute de la methode GET et de la route '/'

//app.get(/^\/(|contactez-moi)$/, async(request, response) => {
//    const nomPage = NOM_PAGES[request.params[0]] || 'index'
//    const indexHtml = await genererModele(nomPage)
    
//    response.send(indexHtml)
//    app.use(express.static(__dirname +'/'))
//    app.use(express.static(__dirname + '/'))
//});
//Ancien Route

app.get('/', async(request, response) => {
   const indexHtml = await genererModele('index')
    
    response.send(indexHtml)
    app.use('image',express.static(__dirname +'/'))
    app.use(express.static(__dirname + '/'))
});
//Ecoute de la methode GET et de la route produit '/'

app.get('/cocktail', async(request, response )=> {
    const cocktailtHtml = await genererModele('cocktail')
    
    response.send(cocktailtHtml)
    app.use('image',express.static(__dirname +'/'))
    app.use(express.static(__dirname + '/'))
});
app.get('/chat', async(request, response )=> {
    const chatHtml = await genererModele('chat')
    
    response.send(chatHtml)
    app.use('image',express.static(__dirname +'/'))
    app.use(express.static(__dirname + '/'))
});
//Ecoute les requete du repertoir css et image
// et associe les au repertoire donnée



//Démarrer le serveur et écouter un port donné
app.listen(PORT, ()=> {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});

