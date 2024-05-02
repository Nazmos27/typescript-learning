//spread operator
//rest operator

//learn spread operators

const bros1 : string[] = ['John', 'Jane', 'Tom'];
const bros2 : string[] = ['Srijan','tamim','rahim']

bros1.push(bros2) //it can not be pushed as bros2 is an array and it will make bros1  an array of arrays!
bros1.push(...bros2) //so we destructure it to get the value in it and assign it in bros1 array


const mentors1 = {
    typescript : 'Mezba',
    redux : 'mir',
    dbms : 'mizan'
}

const mentors2 = {
    reactjs : "Ali",
    redux : 'mir',
    prisma: 'firoz'
}

const mentorsList = {
    ...mentors1,
    ...mentors2
}

//learn rest operator

//it helps to assign all the incoming value in an array and execute  a function with those values
const greetFriends = (...friends:string[]) => {
    friends.forEach((friend:string) => console.log(`Hi ${friend}`))
}

greetFriends('abul', 'sajjad', 'ali')