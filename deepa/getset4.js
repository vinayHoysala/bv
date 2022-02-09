//playing with the counter
//(Just as example for getter and setter
var obj = {
    counter:0,
    get reset() {
        this.conuter = 0;
    },
    get increment() {
        this.counter++;
    },
    get decrement() {
        this.counter--;
    },
    set add(value) {
        this.counter +=value;
    },
    set subtract(value) {
        this.counter -= value;
      }

    };
    // Let's Play with the counter:
    obj.reset;
    console.log(obj.counter);
    obj.add = 5;
    console.log(obj.counter);
    obj.subtract = 1;
    console.log(obj.counter);
    obj.increment;
    console.log(obj.counter);
    obj.decrement;
    console.log(obj.counter);



    //op:
    0
    5
    4
    5
    4
