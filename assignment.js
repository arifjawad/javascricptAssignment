//Answer-1
function kilometerToMeter(distance) {
    var converted = 0;
    converted = distance*1000;
    return converted+" meter" ;  
}
//Answer-2
function budgetCalculator(product1,product2,product3) {
    var totalAmount=0;
    totalAmount = product1+product2+product3;
    return totalAmount + " taka" ;  
}
//Answer-3
function hotelCost(days) {
    var cost=0;
    if(days<=10){
        totalCost = days*100;
    }
    else if(days>10 && days <=20){
        days = days-10;
        firstTenDaysCost= 10*100;
        remainingDaysCost=days*80;
        totalCost= firstTenDaysCost+remainingDaysCost;
    }else if(days>20 && days <31)
    {
        days = days-20;
        firstTenDaysCost= 10*100;
        secondTenDaysCost=10*80;
        remainingDaysCost=days*50;
        totalCost= firstTenDaysCost+secondTenDaysCost+remainingDaysCost;
    }else{
        return "wrong input";
    }

    return totalCost + " taka" ;  
}

function megaFriend(){
  var names=["abc","abcddddd","abcde"];

var long=names[0];
    for(var i=1;i<names.length;i++){
      if(names[i].length>long.length){
          long=names[i];
      }
                 
    }
    
    return "largest Name is " +long;
}


//Answer-1
var x = kilometerToMeter(1);
console.log(x);

//Answer-2
var watch= 50;
var mobile=100;
var laptop=500;
var total= budgetCalculator(watch,mobile,laptop);
console.log(total);

//Answer-3
var totaldays=21;
var totalCost=hotelCost(totaldays);
console.log(totalCost);

//Answer-4

var largestFound=megaFriend();
console.log(largestFound);