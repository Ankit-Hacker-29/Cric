function authenticate() {
    let passcode = prompt("Enter the secure passcode:");

    // Simple Passcode Validation (Change '1234' to your secure passcode)
    if (passcode === "1234") {
        document.getElementById("doc-links").style.display = "block";
        alert("Access Granted!");
    } else {
        alert("Access Denied!");
    }
}