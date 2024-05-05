{
    //conditional type

    type a1 = null;
    type b1 = number;
    type X = a1 extends null ? true : false;
    type Y = a1 extends undefined ? true : b1 extends number ? false : any; //hover on X,Y to see which type they are based on condition!

    type Sheikh = {
        car: string;
        bike: string;
        plane: string;
        taractor : string
    }

    type CheckVehicle<T> = T extends keyof Sheikh? true : false;
    
    type HasPlane = CheckVehicle<'plane'> //HasPlane will return true here

}