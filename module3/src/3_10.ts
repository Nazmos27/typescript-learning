{
    //Encapsulation

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

        set deposit(amount : number){
            this._balance = this._balance + amount;
        }

        private getBalance(){
            return this._balance;
        }
        getMethod(){
            return this.getBalance()
        }
    }

    const goribManusherAccount = new BankAccount(323,30,"Md.Nazmos Sakib","065sad")
    // goribManusherAccount.addDeposite(20)
    goribManusherAccount.deposit = 50
    console.log(goribManusherAccount.getBalance()); //can not access getBalance method as it is private
    console.log(goribManusherAccount.getMethod()); //but through getMethod we can access getBalance indirectly...here getBalance is encapsulated by getMethod


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