// Funktion zum Hinzufügen eines neuen Eintrags zur Liste
function addNewItem(text, checked) {
    var newItemElement = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;
    var textNode = document.createTextNode(text);
    
    newItemElement.appendChild(checkbox);
    newItemElement.appendChild(textNode);

    document.getElementById("bucketList").appendChild(newItemElement);

    // Eventlistener für das Ändern des Checkbox-Status
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            textNode.style.textDecoration = "line-through";
        } else {
            textNode.style.textDecoration = "none";
        }
    });
}

// Eventlistener für das Hinzufügen eines neuen Eintrags
document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden des Formulars
    var newItemInput = document.getElementById("newItem");
    var newItemText = newItemInput.value.trim();

    if (newItemText !== "") {
        addNewItem(newItemText, false); // Neuer Eintrag wird der Liste hinzugefügt
        newItemInput.value = ""; // Zurücksetzen des Eingabefelds
    }
});

// Beispiel-Einträge zur Liste hinzufügen
addNewItem("Reisen nach Japan", true);
addNewItem("Bungee-Jumping", false);
