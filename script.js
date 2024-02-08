// Funktion zum Hinzufügen eines neuen Eintrags zur Liste
function addNewItem(text) {
    var newItemElement = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox"; // Klasse für das Styling hinzufügen
    var label = document.createElement("label");
    label.textContent = text;

    newItemElement.appendChild(checkbox);
    newItemElement.appendChild(label);

    document.getElementById("bucketList").appendChild(newItemElement);
}

// Eventlistener für das Hinzufügen eines neuen Eintrags
document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden des Formulars
    var newItemInput = document.getElementById("newItem");
    var newItemText = newItemInput.value.trim();

    if (newItemText !== "") {
        addNewItem(newItemText); // Neuer Eintrag wird der Liste hinzugefügt
        saveListToLocalStorage(); // Liste im localStorage aktualisieren
        newItemInput.value = ""; // Zurücksetzen des Eingabefelds
    }
});

// Eventlistener für das Ändern des Checkbox-Status
document.addEventListener("change", function(event) {
    if (event.target.classList.contains("checkbox")) {
        var listItem = event.target.parentNode;
        if (event.target.checked) {
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }
        saveListToLocalStorage(); // Liste im localStorage aktualisieren
    }
});

// Funktion zum Speichern der Bucketliste im localStorage
function saveListToLocalStorage() {
    var listItems = document.querySelectorAll("#bucketList li");
    var items = [];
    listItems.forEach(function(item) {
        if (!item.querySelector(".checkbox").checked) { // Nur nicht abgehakte Elemente speichern
            var text = item.querySelector("label").textContent;
            items.push({ text: text });
        }
    });
    localStorage.setItem("bucketList", JSON.stringify(items));
}

// Funktion zum Laden der Bucketliste aus dem localStorage
function loadListFromLocalStorage() {
    var storedList = localStorage.getItem("bucketList");
    if (storedList) {
        var items = JSON.parse(storedList);
        items.forEach(function(item) {
            addNewItem(item.text);
        });
    }
}

// Beim Laden der Seite die Bucketliste aus dem localStorage laden
window.addEventListener("load", function() {
    loadListFromLocalStorage();
});
