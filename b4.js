class Fraction {
    constructor(t, m) {
        if (m === 0) {
            throw new Error("zero");
        }
        this.tu = t;
        this.mau = m;
    }
    scan(t, m) {
        this.tu = t;
        this.mau = m;
    }
    print() {
        console.log(`${this.tu}/${this.mau}`)
    }
    rutGon() {
        const uoc = ucln(this.tu, this.mau);
        return new Fraction(this.tu / uoc, this.mau / uoc);
    } 
    add(t,m) {
        let boi = bcnn(this.mau,m);
        let ts=this.tu*boi/this.mau
        let ts2 = t*boi/m

        return new Fraction(ts+ts2,boi);
    }
    multiply(t, m) {
        this.tu *= t;
        this.mau *= m;
        return new Fraction(this.tu, this.mau);
    }
    equal(t, m) {
        if ((this.tu / this.mau) === (t / m)) {
            return true
        }
    }
    lessThan(t, m) {
        if ((this.tu / this.mau) < (t / m)) {
            return true
        }
    }
}
let ucln = function (a, b) {
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
}
let bcnn = function(a,b) {
    return (a*b)/ucln(a,b);
}



