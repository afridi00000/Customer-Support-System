// Task 2: Adding Support Tickets Dynamically
const ticketContainer = document.getElementById("ticketContainer");

function createSupportTicket(customerName, issueDescription, priority) {
    const ticket = document.createElement("div");
    ticket.setAttribute("class", `ticket ${priority === "High" ? "high-priority" : ""}`);

    const heading = document.createElement("h3");
    heading.textContent = customerName;

    const paragraph = document.createElement("p");
    paragraph.textContent = issueDescription;

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = `Priority: ${priority}`;

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";

    ticket.appendChild(heading);
    ticket.appendChild(paragraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    ticketContainer.appendChild(ticket);
}

// Add sample tickets
createSupportTicket("John Doe", "Login issue", "High");
createSupportTicket("Jane Smith", "Payment failed", "Medium");
createSupportTicket("Alice Johnson", "Feature request", "Low");
// Task 3: Converting NodeLists to Arrays for Bulk Updates
const highPriorityTickets = document.querySelectorAll(".ticket.high-priority");
const highPriorityTicketsArray = Array.from(highPriorityTickets);

highPriorityTicketsArray.forEach(ticket => {
    ticket.style.backgroundColor = "#ffe6e6"; // Light red background
});
// Task 4: Implementing Ticket Resolution with Event Bubbling
ticketContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const ticket = event.target.closest(".ticket");
        ticketContainer.removeChild(ticket);
    } else {
        console.log("Support ticket clicked");
    }
});