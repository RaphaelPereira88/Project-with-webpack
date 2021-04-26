function handleSubmit(event) {
    event.preventDefault()
    Client.cleanData("")
    document.getElementById("output").className = "activated"

    const inputText = document.getElementById('name').value
//will check if url is good
    Client.urlCheck(inputText)
}
export { handleSubmit}