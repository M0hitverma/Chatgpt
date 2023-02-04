//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

const { Configuration, OpenAIApi } = require("openai");
const express=require('express');
const bodyParser = require('body-parser')
const cors = require ('cors')
const configuration = new Configuration({
    organization: "org-Jy1FyjfXAFsJ8JUodWJ8DuJS",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);


// create a simple express api that calls the functions above 

const app=express()

app.use(bodyParser.json())
app.use(cors())

const port=3080

app.post('/',async(req,res)=>{
    const {message}=req.body;
    console.log(message,"message")
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens:200,
        temperature: 0.5
      });
      
  res.json({
    // data:response.data
     message :response.data.choices[0].text,
  })

});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})