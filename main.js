function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xy_Ff0fzQ/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}