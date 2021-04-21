const updateUI = async (response) => {
    
    document.getElementById("polarity").innerHTML = "Polarity: " + response.score_tag;
    document.getElementById("agreement").innerHTML = "Agreement: " + response.agreement;
    document.getElementById("subjectivity").innerHTML = "Subjectivity: " + response.subjectivity;
    document.getElementById("confidence").innerHTML = "Confidence: " + response.confidence;
    document.getElementById("irony").innerHTML = "Irony: " + response.irony;
};

export { updateUI }