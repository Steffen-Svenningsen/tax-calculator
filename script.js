function calculateResult() {
    // Input values
    let money = document.getElementById("money").value;
    let tax = document.getElementById("tax").value;

    // Elements
    let taxResult = document.getElementById("taxAmount");
    let result = document.getElementById("result");
    let resultContainer = document.getElementById("resultContainer");
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.innerHTML = "";

    // Show result container upon running the function
    resultContainer.style.display = "flex"

    if (money && tax !== "") {
        // Calculate the tax amount
        let taxAmount = money * (tax / 100);
        let finalAmount = money - taxAmount;

        // Update the taxAmount and result elements with the calculation
        taxResult.innerHTML = `Tax amount ${taxAmount.toFixed(2)}`
        result.innerHTML = `Final amount ${finalAmount.toFixed(2)}`

        // Add border black if succes
        resultContainer.style.borderColor = "black"
        resultContainer.style.color = "black"
    } else {
        // Show an error message
        errorMsg.innerHTML = "Please fill out the input fields and try again.";
        taxResult.innerHTML = "";  // Clear previous calculation
        result.innerHTML = "";  // Clear previous calculation
        result.style.marginTop = "0" // Remove margin top when displaying error msg
    }
}
