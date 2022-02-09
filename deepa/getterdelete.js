const salary = {
    basic : 10,
    allowance: 20,
    get gross() {
        return 1;
    },
};

delete salary.gross;

console.log(salary);    ///op: {basic = 10, allowance =20}

//The get syntax binds an object property toa function
///that will be called when that property is accessed.

//here gross is a PSEUDO PROPERTY for OBJECT SALARY.            