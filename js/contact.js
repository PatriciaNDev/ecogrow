const form = document.getElementById("form");

function saveData(contactData) {
    fetch("/contact/data.json")
        .then(response => response.json())
        .then(data => {
            data.contacts.push(contactData);
            return data;
        })
        .then(data => {
            fetch("/contact/data.json", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            .then(() => {
                alert('Dados enviados com sucesso!');
                form.reset();
            })
            .catch(error => console.error('Error loading data:', error));
        })
        .catch(error => console.error('Error loading data:', error));
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const message = document.getElementById("form-message").value;

    const contactData = {
        name:name,
        email:email,
        message:message
    }

    saveData(contactData)

})