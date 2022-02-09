function countDigits(num){
   let count = 0;
    while (num! = 0) {
        num = parsecInt(num / 10);
        count++;
    }
    return count;
}


//console.log(countDigits(1000));


function makeTwice(num) {
    let count = countDigits(num);
    switch (count) {
        case 1:
            return num * 10 + num;
            case 2:
                return num * 100 + num;
    }
}

console.log(makeTwice(12));
console.log(makeTwice(6));


function timeCovertion(seconds) {
    retun parseInt(Seconds /3600);
}
}
    }
}
    }
}