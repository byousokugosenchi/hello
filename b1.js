class point2D{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    scan(x,y) {
        this.x = x;
        this.y = y;
        console.log(x,y)
    }
    print() {
        console.log(`(${this.x},${this.y})`);
    }
    move(dx,dy) {
        this.x +=dx;
        this.y +=dy;
        console.log(this.x,this.y);

    }
    get point () {
        return `${this.x} ${this.y}`
    }
    set point (value) {
        [this.x , this.y] =value.split(",");
    }
    
    distance(x,y) {
        return console.log(Math.sqrt((this.x-x)*(this.x-x) - (this.y-y)*(this.y-y)));
    }
}






