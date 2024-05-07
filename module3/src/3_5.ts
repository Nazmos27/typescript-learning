{
    //access modfier

    class BankAccount{
        public readonly id : number;
        private _balance:number;
        public name : string;
        protected _password : string | number; 

        constructor(id:number,balance : number,name: string,password: string | number){
            this.id = id;
            this._balance = balance;
            this.name = name;
            this._password = password;
        }

        addDeposite(amount:number){
            this._balance = this._balance + amount;
        }
        getBalance(){
            return this._balance;
        }
    }

    const goribManusherAccount = new BankAccount(323,30,"Md.Nazmos Sakib","065sad")
    goribManusherAccount.addDeposite(20)
    console.log(goribManusherAccount.getBalance());


    class StudentAccount extends BankAccount{
        constructor(id: number,name: string,balance:number,password:string|number){
            super(id,balance,name,password);
        }
        test(){
            console.log(this._password); //here we can access the password field which will not be changeable/assignable in it's instance
        }
    }
    const tryToGetPass = new StudentAccount(434,"Priya",20,123)
    tryToGetPass.password // password can not be changed here as it is protected.password can be accessible in the class constructor but not in its instance
    console.log(tryToGetPass);
}