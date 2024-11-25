document.addEventListener("DOMContentLoaded", () => {
    const canvasSize = document.getElementById("canvas-size");
    const pets = document.getElementById("pets");
    const otherPets = document.getElementById("other-pets");
    const priceDisplay = document.getElementById("price");

    function calculatePrice() {
        let price = 0;

        // Canvas size pricing
        if (canvasSize.value === "11x14") price += 150;
        if (canvasSize.value === "8x10") price += 100;

        // Pets pricing
        if (pets.value === "1") price += 0;
        if (pets.value === "2") price += 50;
        if (pets.value === "other" && otherPets.value) {
            const numPets = parseInt(otherPets.value, 10);
            if (!isNaN(numPets)) {
                price += 50 + (numPets - 2) * 25; // Additional $25 per pet after 2
            }
        }

        // Update price display
        priceDisplay.textContent = `Total Price: $${price}`;
    }

    // Event listeners
    canvasSize.addEventListener("change", calculatePrice);
    pets.addEventListener("change", () => {
        if (pets.value === "other") {
            otherPets.style.display = "block";
        } else {
            otherPets.style.display = "none";
            otherPets.value = ""; // Reset value
        }
        calculatePrice();
    });
    otherPets.addEventListener("input", calculatePrice);
});
