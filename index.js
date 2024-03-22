#! /usr/bin/env node
console.log("Welcome Friend, Please use this calculator to solve your mathematical problems. I hope you will enjoy it");
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Press Enter to Start", type: "number", name: "enterkey" },
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the folloing operation to perform task",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please Select Valid Operator");
}
console.log("Thanks For using this calculator, Have a nice day !");
