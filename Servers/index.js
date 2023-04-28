// const fs= require('fs')
const spech = require('microsoft-cognitiveservices-speech-sdk')
const config = spech.SpeechConfig.fromSubscription('e7d7b6823aca477b83035030806cfddd' , 'eastus')
const express= require('express')
const fs = require("fs");

const os = require('os')
var cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({ dest: os.tmpdir() });

config.speechRecognitionLanguage = "en-US";
async function handleSpeechRecognition(file , quote) {
    const PronunciationAssessmentGradingSystem =spech.PronunciationAssessmentGradingSystem
    const  PronunciationAssessmentGranularity = spech.PronunciationAssessmentGranularity
    let audioConfig = spech.AudioConfig.fromWavFileInput(file);
console.log(config);
    // console.log(audioConfig)
   const recognizer = spech.SpeechRecognizer.FromConfig(config,'en-US', audioConfig)
   console.log(recognizer);
    const pronunciationAssessmentConfig  = new spech.PronunciationAssessmentConfig(quote,
    PronunciationAssessmentGradingSystem.HundredMark,
    PronunciationAssessmentGranularity.Word, true);
    pronunciationAssessmentConfig.applyTo(recognizer);
    // let result=undefined;
    return recognizer

}
// fromFile()
const app = express()
var corsOptions = {
    origin: '*',
  }
  app.use(cors(corsOptions))
let current = 0
app.post('/recognizeAudio' , upload.single('audio'), async (req , res)=>{
    const usable = fs.readFileSync(req.file.path)
    // const usable = fs.readFileSync('./aa.wav')


    const recognizer = await handleSpeechRecognition(usable , req.query.quote).catch(e=>{
        console.log('error happened here' , e);
    })
    fs.unlinkSync(req.file.path)

    recognizer.recognizeOnceAsync(async (ress)=>{
        console.log(ress);
        let pronunciationAssessmentResult = spech.PronunciationAssessmentResult.fromResult(ress);
        res.send(pronunciationAssessmentResult)
   })

})
app.listen(5000 , ()=>console.log('Speech servers running on localhost:5000'))