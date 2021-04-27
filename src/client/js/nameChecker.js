function urlCheck(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const regexurl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (inputText ===""){
        alert("please enter a Text or URL");
        document.getElementById("name").style.borderColor = "red";
        window.stop();
    }else{
        if (regexurl.test(inputText)) {
            console.log("::: Form Submitted :::");
            document.getElementById("results").innerHTML = " request submitted and being process, please wait few seconds: "
            setTimeout((()=> {document.getElementById("results").innerHTML = ""}), 2000);
            Client.postData('http://localhost:8081/clientdataUrl',{ sentence: inputText })
            .then((response)=> {
                if (response.status.code==="212"){
                    alert("please enter a valid URL");
                    console.log("error", error);
                }else{
                    try {
                        Client.updateUI(response);
                    } catch (error) {
                        alert("please enter a valid URL");
                        console.log("error", error);
                    }
                }
            })
        } else {
            console.log("::: Form Submitted :::");
            document.getElementById("results").innerHTML = " request submitted and being process, please wait few seconds: "
            setTimeout((()=> {document.getElementById("results").innerHTML = ""}), 2000);
            Client.postData('http://localhost:8081/clientdataText',{ sentence: inputText })
            .then((response)=> {
                try {
                    Client.updateUI(response);
                } catch (error) {
                    console.log("error", error);
                }
            })
        }
    }
}


export { urlCheck }
