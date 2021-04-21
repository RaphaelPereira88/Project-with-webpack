function handleSubmit(event) {
    event.preventDefault()

    const content = document.getElementById('name').value
//will check if url is good
    Client.urlCheck(content)

//post the client's input 
    console.log("::: Form Submitted :::")
    document.getElementById("name").innerHTML = "result for: " + content;

    Client.postData('http://localhost:8081/clientdata',{ sentence: content })
    .then((response)=> {
        try {
            Client.updateUI(response);
        } catch (error) {
            console.log("error", error);
        }
    })
}

export { handleSubmit}