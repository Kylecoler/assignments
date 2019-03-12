const express = require('express');
const app = express();
const list = require('./list')
const uuid = require('uuid')

const port = 7000

app.use(express.json())

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});

app.get('/dataBase', (reg, res)=>{
    res.send(dataBase)
})
app.get('/list', (reg, res)=>{
    res.send(list)
})

app.post('/dataBase', (reg, res)=>{
    const newObj = reg.body;
    newObj._id = uuid.v4();
    dataBase.push(newObj);
    res.send(newObj);
})

app.post('/list', (reg, res)=>{
    const newObj = reg.body;
    newObj._id = uuid.v4();
    list.push(newObj);
    res.send(list)
})

app.delete('/dataBase/:id', (reg, res)=>{
    const index = dataBase.map(e=>{return (e.id)}).indexOf(`${reg.params.id}`)
    console.log(index)
    res.send(dataBase[index]
)})