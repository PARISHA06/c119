function setup()
{
    canvas=createCanvas(230, 230);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/w4qFKMS16/model.json",modelLoaded);
}

function draw()
{
    image(video, 0, 0, 230, 230);
    classifier.classify(video, gotResult);
}

function modelLoaded()
{
    console.log("modelLoaded");
}

function gotResult(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("p11").innerHTML=results[0].label;
        document.getElementById("p22").innerHTML=results[0].confidence.toFixed(3);
    }
}