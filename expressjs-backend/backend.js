const e = require('express');
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      
app.get('/users', (req, res) => {
    const name = req.query.name;
    const job =req.query.job;
    if (name != undefined&&job!=undefined){
        let result = findUserByNameAndJob(name,job);
        result = {users_list: result};
        //console.log(result)
        res.send(result);
    }
    else if (name != undefined){
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

const findUserByName = (name) => { 
    return users['users_list'].filter( (user) => user['name'] === name); 
}

const findUserByNameAndJob = (name,job) => { 
    return users['users_list'].filter( (user) => user['job'] === job && user['name'] === name); 
}
app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
    //return users['users_list'].filter( (user) => user['id'] === id);
}

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    userToAdd.id=generateID();
    //console.log(userToAdd)
    addUser(userToAdd);
    res.status(201).send(userToAdd).end();
});

function addUser(user){
    users['users_list'].push(user);
}
function generateID(){
    const id=randomChar()+randomChar()+randomChar()+randomNum()+randomNum()+randomNum()
    return id
}
function randomChar(){
    return String.fromCharCode(26*Math.random()+97)
}
function randomNum(){
    return Math.floor(10*Math.random()).toString()
}

app.delete('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        var i=0;
        while(i<users['users_list'].length){
            if (users['users_list'][i].id==id){
                users['users_list'].splice(i, 1);
            }
            else{
                i++;
            }
            
            

        }
        result = {users_list: result};
        res.send(result);
    }
});

const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }