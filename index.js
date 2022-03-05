const express = require ('express')
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors');
app.use(cors())

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("hello word i am learning code")
});


const users = [
    {id:0, name:'rakib', age:23, email:'sabana@gmail.com'},
    {id:1, name:'liton', age:23, email:'sabana@gmail.com'},
    {id:2, name:'soumya', age:23, email:'sabana@gmail.com'},
    {id:3, name:'sakib', age:23, email:'sabana@gmail.com'},
    {id:4, name:'papon', age:23, email:'sabana@gmail.com'},
    {id:5, name:'sabana', age:23, email:'sabana@gmail.com',},
    {id:6, name:'rajjak', age:23, email:'sabana@gmail.com'},

];


app.get('/users', (req, res)=>{

const search = req.query.search;
const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
if(search){
    res.send(searchResult)
}else{
    res.send(users);
}



   
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    res.send(users[id])
})

//post method
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post',newUser)
    res.json(newUser);

})

app.listen(port, ()=>{
    console.log(`listening from port ${port}`);
})