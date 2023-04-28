const start = document.getElementById('a')
const box  = document.querySelector('.box')
const results = document.querySelector('.results')
let counter =0;
let rec , gumStream , input;
const fd = new FormData()
a.addEventListener('click'  ,record)
let quote;
async function displayQuote(){
    const quote = await fetch('https://api.quotable.io/random')
    const j = await quote.json()
    box.innerHTML = j.content
    return (j.content)
}
async function record (w){
    w.preventDefault();
    
    if(counter%2 === 0){
     results.innerHTML=""

    var constraints = {
        audio: true,
        video: false
    } 
    /* Disable the record button until we get a success or fail from getUserMedia() */
    const audioContext=new AudioContext()
    
    navigator.mediaDevices.getUserMedia(constraints).then(async function(stream) {
        console.log("getUserMedia() success, stream created, initializing Recorder.js ..."); 
        gumStream = stream;
        input = audioContext.createMediaStreamSource(stream);
        rec = new Recorder(input, {
            numChannels: 1
        }) 
        rec.record()
        console.log("Recording started");
        quote = await displayQuote();


    }).catch((err)=>{
     console.log(err)
    });
}else{
    start.disabled = true;
    rec.stop()
    gumStream.getAudioTracks()[0].stop();
   const ea =  rec.exportWAV(async (r)=>{
    console.log(quote)
    fd.append('audio' , r , 'audio.wav')
    console.log(fd)
    const main = await fetch(`http://localhost:5000/recognizeAudio?quote=${quote}`, {
        method: 'POST',
        body: fd,
    })
    const data = await main.json();
    console.log(data)
    results.style.visibility = 'visible'
    console.log(data.privPronJson.PronunciationAssessment)
    const keys = Object.keys(data.privPronJson.PronunciationAssessment)
    let av = 0
    
    let str = ""
    for(let key = 0;key<keys.length;key++){
            results.innerHTML += `${keys[key]}: ${data.privPronJson.PronunciationAssessment[keys[key]]}<br>`
    }
    for(let key=0 ;key< keys.length;key++){
        // console.log(keys[key]);
        let curr = keys[key]
        console.log(key)
        console.log(curr)
        let us  = 0
        // console.log(uscurr)
       
        console.log(us)
    }
    // console.log(str)

    // results.innerHTML += `Final Score:${av/4}`
    // fd=undefined
    fd.delete('audio');

    start.disabled = false;

    console.log(counter)
});
}
    counter++
}
