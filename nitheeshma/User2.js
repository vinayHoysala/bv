let Rectangle= {
    constructor(height,width){
        this.height=height;
        this.width=width;
    }

    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height*this.width;
    }
}
const squre=new Rectangle(10,10);
console.log(Rectangle.name);

