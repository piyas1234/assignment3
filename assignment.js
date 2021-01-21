// killometerToMeter // killometerToMeter 
// killometerToMeter // killometerToMeter 
// killometerToMeter // killometerToMeter 
// killometerToMeter // killometerToMeter 
// killometerToMeter // killometerToMeter 
function killometerToMeter(params) {
    if (params >= 0) {
        var singleKillomiter = 1000;
        var result = singleKillomiter * params;
        return result;
    } else {
        console.log('value should be more than 0');
    }
}
var result = killometerToMeter(1);
console.log(result);

// budgetCalculator // budgetCalculator 
// budgetCalculator // budgetCalculator 
// budgetCalculator // budgetCalculator 
// budgetCalculator // budgetCalculator 
function budgetCalculator(watch, phone, leptop) {
    if (watch >= 0 && phone >= 0 && leptop >= 0) {
        var watchPrice = 50 * watch;
        var phonePrice = 100 * phone;
        var leptopPrice = 500 * leptop;
        var result = watchPrice + phonePrice + leptopPrice;
        return result;
    }
    else {
        console.log('value must be more than 0');
    }
}
var result = budgetCalculator(-1, 1, 1);
console.log(result);
//hotelCost//hotelCost//hotelCost
//hotelCost//hotelCost//hotelCost
//hotelCost//hotelCost//hotelCost
//hotelCost//hotelCost//hotelCost
//hotelCost//hotelCost//hotelCost
//hotelCost//hotelCost//hotelCost
function hotelCost(night) {
    var perNightCost = 100;
    var after10PerNightCost = 80;
    var after20PerNightCost = 50;
    var total10NightCost = perNightCost * 10;
    var total20NightCost = after10PerNightCost * 10;
    if (night <= 10 && night >= 0) {
        var totalCost = perNightCost * night;
        return totalCost;
    }
    else if (night >= 11 && night <= 20) {
        var ater10Night = night - 10;
        var totalAfter10NightCost = ater10Night * after10PerNightCost;
        var totalCost = total10NightCost + totalAfter10NightCost;
        return totalCost;

    }
    else if (night >= 21) {
        var ater20Night = night - 20;
        var totalAfter20NightCost = ater20Night * after20PerNightCost;
        var totalCost = total10NightCost + total20NightCost + totalAfter20NightCost;
        return totalCost;
    }
    else {
        return `negative value is not allowed because you should stay in out hotel one day`;
    }
}

var result = hotelCost(71);
console.log(result);




// megaFriend megaFriend megaFriend
// megaFriend megaFriend megaFriend
// megaFriend megaFriend megaFriend
// megaFriend megaFriend megaFriend
// megaFriend megaFriend megaFriend


function megaFriend(arr) {
    var large = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (large.length < arr[i].length) {
            large = arr[i];
        }

    }
    return large;
}

myArry = ['piyas talukder', 'reyad talukder', 'sajib', 'asik', 'jongkar mahabub vai is a realy great person!'];
var result = megaFriend(myArry);
console.log(result);





