var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(color, count) {
    chocolates.push(color, );
}


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(array, number) {
    let removedArray = [];
    if (number <= array.length) {
        for (var i = 0; i < number; i++) {
            removedArray.push(array.shift());
        }
        return removedArray;
    } else if ((number == 0) || (Math.sign(number) == -1)) {
        return "Number cannot be zero/negative";
    } else {
        return "Insufficient chocolates in the dispenser";
    }
}


//Progression 3: Dispense ___ chocolates
function dispenseChocolates(array, number) {
    let dispenseArray = [];
    if (number == 0 || Math.sign(number) == -1) {
        return "Number cannot be zero/negative";
    } else if (number > array.length) {
        return "Insufficient chocolates in the dispenser";
    } else {
        for (var i = 0; i < number; i++) {
            dispenseArray.push(array.pop());
        }
        return dispenseArray;
    }
}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(array, number, color) {
    var favourite = [];
    var count = 0;
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] == color) {
            favourite.push(array.pop);
            count++;
            if (count == number)
                break;
        }
        return favourite;
    }
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(array) {
    var count = {};
    uniqueCount.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
    });
    console.log(count);
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(array) {
    return count.sort();
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(number, color, finalColor) {
    array.forEach(function () {
        if (array[i] == color)
            array[i] = finalColor
    });
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(array, color, finalColor) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == color) {
            array[i] = finalColor;
        }
    }
}



//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(array, color) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == color) {
            array.shift();
            break;
        }
    }
}