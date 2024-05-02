{

    //Learning Destructuring


    //Object destructuring
    const user = {
        contactNo : 1234,
        name:{
            firstName : 'Nazmos',
            lastName : 'Sakib'
        }
    }

    const {contactNo,name:{firstName : first}} = user // firstName:first ---> name allias

    //Array destructuring
    const myFrnds = ['sdfa','asfd','dfsg','aret','ertg','asrg']

    const [,,person,...rest] = myFrnds //here person will get the 'dfsg' value and rest willt take the last 3 elements of this array
}

