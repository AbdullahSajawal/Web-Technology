let stack = [];

function executeOperation(operationCallback) {
    operationCallback();
    updateStackDisplay();
}

function pushElement() {
    let value = document.getElementById("stackInput").value;
    if (value === "") {
        showMessage("Please enter a value to push");
        return;
    }
    stack.push(value);
    showMessage("Pushed: " + value);
}

function popElement() {
    if (stack.length === 0) {
        showMessage("Stack is empty");
        return;
    }
    let removed = stack.pop();
    showMessage("Popped: " + removed);
}

function peekElement() {
    if (stack.length === 0) {
        showMessage("Stack is empty");
        return;
    }
    showMessage("Top element: " + stack[stack.length - 1]);
}

function clearStack() {
    stack = [];
    showMessage("Stack cleared");
}

function handleStackAction(action) {
    switch (action) {
        case "push":
            executeOperation(pushElement);
            break;

        case "pop":
            executeOperation(popElement);
            break;

        case "peek":
            executeOperation(peekElement);
            break;

        case "clear":
            executeOperation(clearStack);
            break;

        default:
            console.log("Invalid action");
    }
}

function updateStackDisplay() {
    document.getElementById("stackDisplay").textContent =
        "Stack: [" + stack.join(", ") + "]";
}

function showMessage(msg) {
    document.getElementById("message").textContent = msg;
}
