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