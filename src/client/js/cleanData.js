function cleanData(){
    document.getElementById("polarity").innerHTML = ""
    document.getElementById("agreement").innerHTML = ""
    document.getElementById("subjectivity").innerHTML = ""
    document.getElementById("confidence").innerHTML = ""
    document.getElementById("irony").innerHTML = ""
};

export { cleanData }