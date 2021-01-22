function kilometerToMeter(kilometer)
{
    if(kilometer<0)
    {
        console.log("Oops!! kilometers can't be negative.If you go backwards you still gonna walk some positive distance.");  //input as a negative number which isn't possible.
        return ;
    }
    else if(typeof kilometer != 'number')
    {
        console.log("Please input some numbers."); //input is not a number which is invalid.
        return ;
    }
    else{
        var meter=kilometer*1000;  //returning the required result.
        return meter;
    }
// test case:-> kilometerToMeter(-1);
// test case:-> kilometerToMeter("amma");
// test case:-> kilometerToMeter(122222222);
}

function budgetCalculator(number_of_watch,number_of_tv,number_of_laptop)
{
    //let's say watch price=50
    //tv price=100
    //laptop price=500
    
    if(typeof number_of_watch !='number' || typeof number_of_tv !='number' || typeof number_of_laptop !='number')
    {
        console.log("Please input each of them as a number.");    // if Input not as a number
        return ;                                                  
    }
    else if(number_of_watch<0 || number_of_tv<0 || number_of_laptop<0)
    {
        console.log("Items can't be negative.Please input some real values."); //for negative values
        return ;
    }
    else{
        var total_watch_price = number_of_watch*50;       //calculate watch price
        var total_tv_price    = number_of_tv*100;        //calculate tv price
        var total_laptop_price= number_of_laptop*500;   //calculate laptop price
        var totalBill= total_watch_price+total_tv_price+total_laptop_price;
        return totalBill; //returning the result 
    }
// test case:->
// budgetCalculator(1,1,-1);
// budgetCalculator(1,"amma",-1);
// budgetCalculator(10,20,3);                                            
}

console.log(kilometerToMeter(2));
console.log(budgetCalculator(5,2,1))