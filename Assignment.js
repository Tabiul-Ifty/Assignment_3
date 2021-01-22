//https://github.com/Tabiul-Ifty/Assignment_3
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

function hotelCost(number_of_day)
{
    var total_bill=0;
    if(typeof number_of_day !='number')
    {
        console.log("Please input some numbes");   //input not a number.
        return ;
    }
    else if(number_of_day<0)
    {
        console.log("Days can't be negative. Please input some real values.");    //input as a negative number.
        return ;
    }
    else if(number_of_day>=0 && number_of_day<=10)           //first 10 days    
    {
         total_bill= number_of_day * 100;
         return total_bill;
    }
    else if(number_of_day>10 && number_of_day<=20)       //upto 20 days
    {
        total_bill= (number_of_day-10)*80 + 10*100;
        return total_bill;
    }
    else if(number_of_day>21)                       //more than 20 days
    {
        total_bill= 10*(100+80)+ (number_of_day-20)*50;
        return total_bill;
    }
// test case:->
// hotelCost(-1);
// hotelCost(5);
// hotelCost(15);
// hotelCost(25);
}

function megaFriend(string_array)
{
    var size_of_name=0;
    var max_length_name="";
    for(var i=0; i<string_array.length; i++)
    {
        if(string_array[i].length> size_of_name)
        {
            size_of_name=string_array[i].length;
            max_length_name=string_array[i];
        }
    }
    return max_length_name;  //returning the maximum lenght's name
}

var name_of_friends=["Goku","Berussama","Buu","Kilua","25th Bam","Endorsi","Anak Jahad", "Pentaminum"];

console.log(megaFriend(name_of_friends));
console.log(kilometerToMeter(2));
console.log(budgetCalculator(5,2,1));
console.log(hotelCost(23));