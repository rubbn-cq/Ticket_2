function validateWithdrawal () {
    let balance = Number(document.getElementById("balance").value);
    let withdrawAmount = Number(document.getElementById("withdrawAmount").value);
    let status;

    if (balance < 0) {
        status = "blocked";
    } else if (withdrawAmount > balance) {
        status = "denied";
    } else {
        status = "approved";
    }

    let result = document.getElementById("result");

    result.textContent = "Status: " + status;

    if (status === "approved") {
        result.style.color = "lightgreen";
    } else if (status === "denied") {
        result.style.color = "orange";
    } else {
        result.style.color = "red";
    }
}