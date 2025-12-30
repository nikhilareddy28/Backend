const getStudents = (req,res) =>{
    let stdData ={name:"aditya",roll:"12345"};
    res.status(200).json({data : stdData});
};
const addStudents = (req,res) =>{
    let mydata=req.body;
    console.log(mydata);
    res.status(201).json({message:"Data added"});
}
export {getStudents ,addStudents};