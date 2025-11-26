function task1() {
    let name = prompt("Enter your Name:");
    let reg = prompt("Enter your Registration ID:");

    alert("Name: " + name + "\nRegistration ID: " + reg);
}

function task2() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));

    let sum = num1 + num2;
    let diff = num1 - num2;
    let prod = num1 * num2;
    let div = num1 / num2;
    let comp = num1 > num2;

    let result =
        "Sum: " + sum +
        "\nDifference: " + diff +
        "\nProduct: " + prod +
        "\nQuotient: " + div +
        "\nComparison (num1 > num2): " + comp;

    alert(result);
}
