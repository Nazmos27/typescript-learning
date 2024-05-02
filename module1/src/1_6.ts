//Learning Function

//Normal function

function add(num1:number,num2:number) : number {
    return num1+num2;
}

add(2,'2') //error for num2 not being a number

//Arrow function

const addArrow = (num1:number,num2:number) : number => num1+num2;


//function in an object --> method

const anotherUser = {
    name:'John',
    balance : 0,
    addBalance(balance : number ) : string {
        return `My new balance is : ${this.balance+balance}`
    }
}

const arr:number[] = [1,4,8]
const newArray: number[] = arr.map((ele :number) => ele*ele)