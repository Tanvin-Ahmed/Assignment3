// https://github.com/Tanvin-Ahmed/Assignment3

// 1st problem
function kilometerToMeter(kilometer) {
    // condition for Exception
    if (kilometer < 0) {
        return 'Exception! Distance can not be negative.';
    }
    else {
        return kilometer * 1000;
    }
}




// 2nd problem
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    // condition for Exception
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return 'Exception! Buy any negative number of product is not possible.';
    }
    else {
        return (watch * watchPrice) + (mobile * mobilePrice) + (laptop * laptopPrice);
    }
}




// 3rd problem
function hotelCost(day) {
    // condition for Exception 
    if (day < 0) {
        return 'Exception! Negative day is impossible.';
    }
    else {
        if (day <= 10) {
            return 100 * day;
        }
        else if (day <= 20) {
            var day10Cost = 100 * 10;
            var remainingDay = day - 10;
            var extraDayCost = remainingDay * 80;
            return (day10Cost + extraDayCost);
        }
        else {
            var day10Cost = 100 * 10;
            var day20Cost = 80 * 10;
            var remainingDay = day - 20;
            var extraDayCost = remainingDay * 50;
            return (day10Cost + day20Cost + extraDayCost);
        }
    }
}




// 4th problem
function megaFriend(name) {
    var max = name[0].length;
    var temp = 0;
    var names = '';
    for (var i = 0; i < name.length; i++) {
        var element = name[i].length;
        if (max < element) {
            temp = max;
            max = element;
            element = temp;
        }
    }
    for (var j = 0; j < name.length; j++) {
        var largeName = name[j];
        if (max == largeName.length) {
            // this condition is for when 1 string is large then others or many string are same size and also large then others or all are same size and those string are also return 
            names += largeName + ' ';
        }
    }
    return names;
    }