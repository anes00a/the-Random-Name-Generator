// List of names to choose from
const names = ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George"];

// Generate a random name
function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Display the random name on the page
document.getElementById('name').textContent = getRandomName();
