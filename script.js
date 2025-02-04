function authenticate() {
    let passcode = prompt("Enter the secure passcode:");
    if (passcode === "1234") {
        document.getElementById("doc-links").style.display = "block";
        alert("Access Granted!");
    } else {
        alert("Access Denied!");
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}