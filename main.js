var dog = 0;
var cat = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/asq9YjVS-/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = 'The detecting voice is of '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'The detecting dog -  '+dog+ 'detected cat - '+cat;


        img = document.getElementById('animal_image');
        if (results[0].label == "barking"){
            img.src = "bark.gif";
            dog = dog + 1;
        }
        else if (results[0].label == "meowing"){
            img.src = "meow.gif";
            cat = cat + 1; 
        }
        else {
            img.src = "listen.gif";
        }
    }
}
