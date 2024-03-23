/*
    This script simulates a backend to save form data when submitted.

    It defines a function saveData(contactData) that fetches existing contact data from data.json, appends the new contact data, and then sends a POST request to update the JSON file with the updated data. As this project only simulates a backend, this throws an error in the console, as the local server does not accept POST requests.

    The form submission event listener prevents the default form submission behavior, retrieves form input values, constructs an object with the contact data, and calls the saveData function to save the data.
*/

// Select the form element
const form = document.getElementById("form");

// Function to save contact data
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

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const message = document.getElementById("form-message").value;

    // Construct an object with the contact data
    const contactData = {
        name:name,
        email:email,
        message:message
    }

    // Save the contact data
    saveData(contactData)

})