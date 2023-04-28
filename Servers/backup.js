// const fs= require('fs')
// const spech = require('microsoft-cognitiveservices-speech-sdk')
// const config = spech.SpeechConfig.fromSubscription('67047a5031454d69a745e30d58cc40f7' , 'southeastasia')
// const express= require('express')
// var cors = require('cors')
// const bodyParser = require('body-parser')
// const upload = require('express-fileupload')
// // const multer = require('multer')
// // const upload = multer({ dest: os.tmpdir() });

// config.speechRecognitionLanguage = "en-US";
// async function handleSpeechRecognition(file , quote) {
//     const PronunciationAssessmentGradingSystem =spech.PronunciationAssessmentGradingSystem
//     const  PronunciationAssessmentGranularity = spech.PronunciationAssessmentGranularity
//     let audioConfig = spech.AudioConfig.fromWavFileInput(file);

//     console.log(config)
//    const recognizer = spech.SpeechRecognizer.FromConfig(config,'en-US', audioConfig)
//     const pronunciationAssessmentConfig  = new spech.PronunciationAssessmentConfig(quote,
//     PronunciationAssessmentGradingSystem.HundredMark,
//     PronunciationAssessmentGranularity.Word, true);
//     pronunciationAssessmentConfig.applyTo(recognizer);
//     let result=undefined;


//     return recognizer

// }
// const app = express()
// var corsOptions = {
//     origin: '*',
//   }
//   app.use(cors(corsOptions))
// app.use(upload())
// let current = 0
// app.post('/recognizeAudio' , async (req , res)=>{
//     console.log(current===0)
// //     console.log(req.query.quote)
//     if(current ===  0){
//     const recognizer = await handleSpeechRecognition(req.files.audio.data , req.query.quote)
//     current++

//     recognizer.recognizeOnceAsync(async (ress)=>{
//         let pronunciationAssessmentResult = spech.PronunciationAssessmentResult.fromResult(ress);
//         console.log(pronunciationAssessmentResult)
//         res.send(pronunciationAssessmentResult)
//    })
// }else{
//     const recognizer = await handleSpeechRecognition(req.files.audio[current].data ,  req.query.quote)
//     recognizer.recognizeOnceAsync(async (ress)=>{
//         let pronunciationAssessmentResult = spech.PronunciationAssessmentResult.fromResult(ress);
//         console.log(pronunciationAssessmentResult)
//         current++
//         res.send(pronunciationAssessmentResult)
//    })
// }
// })
// app.listen(5000);