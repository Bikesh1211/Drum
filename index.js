
let keylength = document.querySelectorAll(".drum").length;
for(let i = 0; i<keylength; i++){


    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
            // alert('this has been clicken'); 
            
            var buttonInnerHTML =  this.innerHTML;
            // alert(buttonInnerHTML)
            makeSound(buttonInnerHTML)

    });

    
    
}
document.addEventListener("keypress",function(event){
    makeSound(event.key)
})

function makeSound(key){
    switch (key){
        case "a":
            var audio = new Audio("sound/clap.wav")
            audio.play();
            document.querySelector('body').style= "background-color: #e9e267"
            document.querySelector('#active').innerHTML = "Clap"
            break;

        case "s":
            var audio = new Audio("sound/hats.wav")
            audio.play()
                                document.querySelector('body').style= "background-color: #71DFE7"
                                document.querySelector('#active').innerHTML = "Closed Hihat"

            break;
        case "d":
            var audio = new Audio("sound/highhats.wav")
            audio.play()
                                document.querySelector('body').style= "background-color: #fd7a7a"
                                document.querySelector('#active').innerHTML = "Crash"

            break;
        case "f":
            var audio = new Audio("sound/kick.wav")
            audio.play()
                                document.querySelector('body').style= "background-color: #f09051"
                                document.querySelector('#active').innerHTML = "Kick"

            break;
        case "j":
            var audio = new Audio("sound/rim.wav")
            audio.play()
                                document.querySelector('body').style= "background-color: #B4FE98"
                                document.querySelector('#active').innerHTML = "Rim"

            break;
        case "k":
            var audio = new Audio("sound/snare.wav")
            audio.play()
                                document.querySelector('body').style= "background-color: #FBD148"
                                document.querySelector('#active').innerHTML = "Snare"

            break;
        case "l":
            var audio = new Audio("sound/tomb.wav")
            audio.play()
                                document.querySelector('body').style= "background-color: #48fba1"
                                document.querySelector('#active').innerHTML = "Tom"

            break;
        case ";":
            var audio = new Audio("sound/hhats.wav")
            audio.play()
                                document.querySelector('body').style= "background-color: rgb(182, 245, 66)"
                                document.querySelector('#active').innerHTML = "Open Hihat"

            break;
        case "h":
            // var audio = new Audio("sound/music.wav")
            audio.play()
                                document.querySelector('body').style= "background-color: rgb(182, 245, 66)"
                                document.querySelector('#active').innerHTML = "Open Hihat"

            break;
    }
}

// JavaScript