class Polygon {
    constructor(side) {
        this.side = side
        this.count = this.side.length
    }

    get countSides() {
        return this.side.length
    }

    get perimeter() {
        if (!Array.isArray(this.side)) return;
        let sum = 0;
        for (var int of this.side) {
            sum += int
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.side)) return;
        if (this.count !==3) return;
        let side1 = this.side[0]
        let side2 = this.side[1]
        let side3 = this.side[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    get isValid() {
        if (!Array.isArray(this.side)) return;
        if (this.count !== 4) return;
        let side1 = this.side[0]
        let side2 = this.side[1]
        let side3 = this.side[2]
        let side4 = this.side[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {
        if (!Array.isArray(this.side)) return;
        if (this.count !==4) return;
        return this.side[0] * this.side[0]
    }
}
