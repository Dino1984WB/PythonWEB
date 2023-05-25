document.getElementById("shoppingForm1").addEventListener("submit", addItem);
document.getElementById("shoppingform2").addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    const itemInput = document.getElementById("itemInput");
    const newItem = itemInput.value;

    if (newItem.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = newItem;
        document.getElementById("itemList").appendChild(listItem);

        // Send HTTP request to backend
        const xhr = new XMLHttpRequest();
        var requestType = "POST";
        var url = "http://127.0.0.1:5000/add-item";
        var opened = true;
        xhr.open(requestType, url, opened);
        xhr.setRequestHeader("Content-Type", "application/http://127.0.0.1:5000","application/json");
        xhr.send(JSON.stringify({ item: newItem }));
        
        itemInput.value = "";
    }
}
function getItem(item) {    

    //get item from db through flask backend
    const xhr = new XMLHttpRequest();
    var requestType = "GET";
    var url = "http://127.0.0.1:5000/get-item";
    var opened = true;
    xhr.open(requestType, url, opened);
    xhr.setRequestHeader("Content-Type", "application/http://127.0.0.1:5000","application/json");
    xhr.send();

    const response = JSON.parse(xhr.responseText);
    console.log(response);
    if (response.length > 0) {
        const listItem = document.createElement("li");
        listItem.textContent = response[0].item;
        document.getElementById("itemOutputList").appendChild(listItem);
    }   
}       