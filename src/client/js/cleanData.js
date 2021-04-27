function cleanData(){
    if (document.getElementById("name").style.borderColor = "red"){
        document.getElementById("name").style.borderColor = "grey";
    }else{
        document.getElementById("name").style.borderColor = "grey";
    }
    document.getElementById("polarity").innerHTML = "";
    document.getElementById("agreement").innerHTML = "";
    document.getElementById("subjectivity").innerHTML = "";
    document.getElementById("confidence").innerHTML = "";
    document.getElementById("irony").innerHTML = "";
};

export { cleanData }