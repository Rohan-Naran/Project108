dog = 0;
cat = 0;
dragon = 0;
whale = 0;

function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-DPac5cB2/model.json', modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error, results) {
    if(error){
        console.log('ERROR');
    } else 
    {
        console.log(results)
        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("amount").innerHTML = "Bark - " + dog + "; Meow - " + cat + "; Roar - " + dragon + "; Whale - " + whale + ";";
        document.getElementById("sound").innerHTML = results[0].label;

        document.getElementById("amount").style.color = "rgb(" + green + "," + red + "," + blue + ")";
        document.getElementById("sound").style.color = "rgb(" + red + "," + green + "," + blue + ")";

        if (results[0].label == "Background Noise"){
            document.getElementById("animalSound").src = 'earGif.gif';
        } else if (results[0].label == "Roar"){
            document.getElementById("animalSound").src = 'Dragon.gif';
        } else if (results[0].label == "Meow"){
            document.getElementById("animalSound").src = 'Cat.webp';
        } else if (results[0].label == "Whale"){
            document.getElementById("animalSound").src = 'Whale.gif';
        } else if (results[0].label == "Bark"){
            document.getElementById("animalSound").src = 'Dog.webp';
        }
    }
}