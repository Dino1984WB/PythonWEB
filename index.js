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
        xhr.open("POST", "http://127.0.0.1:5000/add-item", true);
        //xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({ item: newItem }));

        itemInput.value = "";
    }
}