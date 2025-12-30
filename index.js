// import http from 'http';
// const server = http.createServer((req,res) => {
//     console.log(req.method);
//     if(req.url == "/users"){
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify({name: "thub"}))
//     } else {
//         res.writeHead(200, {"content-type": "text/html"});
//         res.end("Hello this is from backend");
//     }
// });
// server.listen(7007, () => {
//     console.log(`server running at port ${7007}`);
// })



import express from 'express';
import router from './routers/studentsrouters.js';
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());
app.use('/',router); 
app.get('/users', (req, res) => {
    res.send("hello this is from backend");
})
// app.post('/add-users', (req, res) => {
//     res.send("hello this is from backend");
// })
app.listen(7007, () => {
    console.log(`server running at port ${7007}`);
});