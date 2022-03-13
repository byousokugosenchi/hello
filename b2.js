class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    print() {
        console.log(`(${this.x},${this.y})`)
    }
    translate(dx,dy) {
        this.x +=dx;
        this.y +=dy;
        console.log(`(${this.x},${this.y})`)
    }
}
class circle {
    constructor(x, y, r) {
        this.center = new point(x,y)
        this.r = r;
    }
    scan(x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r ;
    }
    print() {
        console.log("Tâm")
        this.center.print();
        console.log("bán kính", this.r);
    }
    move(dx,dy) {
        this.center.translate(dx,dy)
    }
    getArea(){
        return 3.14*this.r*this.r;
    }
}



