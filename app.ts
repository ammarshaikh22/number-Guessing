#! /usr/bin/env node
import inquirer from "inquirer";
const randDom_Num:number = Math.round(Math.random() * 5 + 1)
const result = await inquirer.prompt([
    {name: "output_user", type: "number", message: "Guess the number form 1-6:"}
])
if(result.output_user === randDom_Num){
    console.log(`You win to guess the number it gone same ${result.output_user}:${randDom_Num}`)
}else{
    console.log(`You lose to guess the number that is ${randDom_Num}`)
}