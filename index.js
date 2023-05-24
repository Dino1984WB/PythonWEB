document.getElementById("shoppingForm").addEventListener("submit", addItem);

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

function getShoppingList() {
    var xhr = new XMLHttpRequest();
    var requestType = "GET";
    var url = "http://127.0.0.1:5000/get-shopping-list";
    var opened = true;
    xhr.open(requestType, url, opened);
    xhr.setRequestHeader("Content-Type", "application/http://127.0.0.1:5000","application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const shoppingList = JSON.parse(xhr.responseText);
                var shoppingList = document.getElementById("shoppingList");
                shoppingList.innerHTML = "";
                //anddd whatshould item really be called?
                response.array.forEach(item => {
                    var listItem = document.createElement("li");
                    listItem.textContent = item;
                    shoppingList.appendChild(listItem);
                
                });
            }
        }
    }

    xhr.send();
    
}