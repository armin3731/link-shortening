import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import crc from 'crc';

const app = express();

var __dirname = path.resolve();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));

const CONNECTION_URL = 'mongodb+srv://javatask:javatask123123@cluster0.avy6a.mongodb.net/test?retryWrites=true&w=majority';
const PORT = 3000;


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`)))
   .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

const urlSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    org_url:String,
    new_url:String
})

const ShortURL = mongoose.model('ShortURL',urlSchema);

app.get('/', (req, res) =>{
      res.sendFile(path.join(__dirname,'views','index.html'));
})

app.get('/data', (req, res) =>{
  ShortURL.find()
  .exec()
  .then(urls => {
    res.status(200).json(urls);
    })
  .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
})

app.post('/data', async (req, res) =>{
  const{org_url} = req.body;
  // console.log(req.body);
  const each_new_url = new ShortURL({
    org_url:org_url,
    new_url:`https://pbid.io/${crc_code_create(org_url)}`,
    _id:mongoose.Types.ObjectId()
  });
  // console.log(each_new_url);
  await each_new_url.save();
  res.json(each_new_url);

})

app.post('/delete', (req, res) =>{
  // JSON template for DELETE request
  // {
  //   "id":"5ffda223d2849e2e81398d3b"
  // }
  const {id} = req.body;
  // console.log(id);
  ShortURL.deleteOne({_id: id})
  .exec()
  .then(result => {
    // console.log(result);
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
})

function crc_code_create(input_url){
  return crc.crc32(input_url).toString(16);
}

//app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))
