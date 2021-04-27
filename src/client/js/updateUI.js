
const updateUI = async (response) => {
    if (response.score_tag === "P+"){
        document.getElementById("polarity").innerHTML = "Polarity:" + "Strong positive";
    }else if(response.score_tag === "P"){
        document.getElementById("polarity").innerHTML = "Polarity: "+ "Positive";
    }else if(response.score_tag ==="NEU"){
        document.getElementById("polarity").innerHTML = "Polarity: "+ "Neutral";
    }else if(response.score_tag ==="N"){
        document.getElementById("polarity").innerHTML = "Polarity: "+  "negative";
    }else if(response.score_tag === "N+"){
        document.getElementById("polarity").innerHTML = "Polarity: "+ "strong negative";
    }else if(response.score_tag === "NONE"){
        document.getElementById("polarity").innerHTML = "Polarity: "+ "without polarity";
    }

    document.getElementById("agreement").innerHTML = "Agreement: " + response.agreement;
    document.getElementById("subjectivity").innerHTML = "Subjectivity: " + response.subjectivity;
    document.getElementById("confidence").innerHTML = "Confidence: " + response.confidence;
    document.getElementById("irony").innerHTML = "Irony: " + response.irony;
};

export { updateUI }