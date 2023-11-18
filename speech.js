const SpeechRecognition =
 window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
    const colors = [
        'red',
        'blue',
        'brown',
        'green',
        'orange',
        'white',
        'pink',
        'purple',
        'yellow ',
    ];
    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim();
        console.log(script)

        if (colors.includes(script)) {
            document.body.style.backgroundColor = script;
            
        } else {
            alert("Please say a color");
         }
        
    }
    
};


rec.start();

