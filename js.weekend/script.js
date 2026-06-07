console.log("Script loaded");
let expenses = [];

const categorySelect = document.getElementById("Category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");
const expenseTableBody = document.getElementById("expenses-table-body");
const totalAmountElement = document.getElementById("total-amount");

addButton.addEventListener("click", () => {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (!amount || !date) {
        alert("Please fill all fields");
        return;
    }

    expenses.push({
        category,
        amount,
        date
    });

    renderExpenses();
});

function renderExpenses() {
    expenseTableBody.innerHTML = "";

    let total = 0;

    expenses.forEach((expense, index) => {
        total += expense.amount;

        const row = expenseTableBody.insertRow();

        row.insertCell(0).textContent = expense.category;
        row.insertCell(1).textContent = "$" + expense.amount.toFixed(2);
        row.insertCell(2).textContent = expense.date;

        const actionCell = row.insertCell(3);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = () => {
            expenses.splice(index, 1);
            renderExpenses();
        };

        actionCell.appendChild(deleteButton);
    });

    totalAmountElement.textContent = "$" + total.toFixed(2);
}
const formattedAmount = amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN"
});
console.log(formattedAmount);