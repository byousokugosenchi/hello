class rectangle {
    constructor(len, width) {
        this.len = len;
        this.width = width;
    }
    scan(len,width) {
        this._len = len;
        this._width = width;

    }
    print() {
        console.log(`(${this.len},${this.width})`)
    }
    get len() {
        return this._len;
    }
    set len(len) {
        if (typeof (len) === 'number') {
            this._len = len;
        }
    }
    get width() {
        return this._width;
    }
    set width(width) {
        if (typeof (width) === 'number') {
            this._width = width;
        }
    }
    move(dx, dy) {
        this.len += dx;
        this.width += dy;
        console.log(this.len, this.width);

    }
    area() {
        return this.len * this.width;
    }
}

class square extends rectangle {
    constructor(side) {
        super(side, side);
    }
    getArea() {
        return console.log(this.side * this.side);
    }
}

const c = new square(3,3);
// c.scan(4,5);
c.getArea()