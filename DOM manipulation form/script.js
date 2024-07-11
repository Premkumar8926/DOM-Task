document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const userTableBody = document.getElementById("userTableBody");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        
        const foodChoices = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(food => {
            foodChoices.push(food.value);
        });

        if (foodChoices.length < 2) {
            alert("Please choose at least 2 food options");
            return;
        }

        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foodChoices.join(", ")}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;
        userTableBody.appendChild(newRow);

        form.reset();
    });
});
