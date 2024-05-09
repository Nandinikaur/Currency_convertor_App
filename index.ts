#! /usr/bin/env node
//Nandini_kaur - 30-04-2024


import inquirer from "inquirer";
import chalk from "chalk";

let currencies: any = {
    "USD" : 1,          //United States Dollar
    "EUR" : 0.93,       //Euro
    "AED" : 3.67,       //United Arab Emirates Dirham
    "CAD" : 1.37,       //Canadian Dollar
    "AUD" : 1.52,       //Australian Dollar
    "JPY" : 155,        //Japanese Yen
    "CNY" : 7.23,       //Chinese Yuan
    "PKR" : 278.22,     //Pakistani Rupees
    "INR" : 83.47,      //Indian Rupees
    "RUB" : 91.29,      //Russian Ruble
};

let answer = await inquirer.prompt([
    {
      name: "amount",
      type: "input",
      message: chalk.bold.blue("Enter the amount to convert:")
    },
    {
        name: "fromCurrency",
        type: "list",
        message: chalk.bold.magenta("covert from:"),
        choices: ["USD", "EUR", "AED", "CAD", "AUD", "JPY", "CNY", "PKR", "INR", "RUB"]

    },
    {
        name: "toCurrency",
        type: "list",
        message: chalk.bold.magenta("convert to:"),
        choices: ["USD", "EUR", "AED", "CAD", "AUD", "JPY", "CNY", "PKR", "INR", "RUB"]
    },
]);


let fromAmount = currencies[answer.fromCurrency];
let toAmount = currencies[answer.toCurrency];
let amount = answer.amount

let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(chalk.bold.yellow(`Converted Amount = "${chalk.italic.cyanBright(convertedAmount)}"`)) 