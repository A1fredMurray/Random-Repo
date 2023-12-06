const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  console.log("as");

app.get('/get',(req,res)=>{
    console.log(123);
    res.status(200).send({
        sampleData:"how you doing?"
    })
})