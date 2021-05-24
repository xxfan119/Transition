Array.prototype.NumMultiply = function (num) {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[0].length; j++) {
            this[i][j] = this[i][j] * num
        }
    }
    return this
}
Array.prototype.MatrixAdd = function (arr) {
    let res = []
    if (this.length === arr.length && this[0].length === arr[0].length) {
        for (let i = 0; i < this.length; i++) {
            res[i] = []
            for (let j = 0; j < this[0].length; j++) {
                res[i][j] = this[i][j] + arr[i][j]
            }
        }
    } else {
        alert('不能相加')
    }
    return res
}
Array.prototype.MatrixSub = function (arr) {
    let res = []
    if (this.length === arr.length && this[0].length === arr[0].length) {
        for (let i = 0; i < this.length; i++) {
            res[i] = []
            for (let j = 0; j < this[0].length; j++) {
                res[i][j] = this[i][j] - arr[i][j]
            }
        }
    } else {
        alert('不能相减')
    }
    return res
}
Array.prototype.MatrixMultiply = function (arr) {
    let res = []
    if (this[0].length === arr.length) {
        for (let i = 0; i < this.length; i++) {
            res[i] = []
            for (let j = 0; j < arr[0].length; j++) {
                res[i][j] = 0
                for (let k = 0; k < this[0].length; k++) {
                    res[i][j] += this[i][k] * arr[k][j]
                }
            }
        }
    }
    return res
}
Array.prototype.Transpose = function () {
        let res = []
        for (let i = 0; i < this[0].length; i++) {
            res[i] = []
            for (let j = 0; j < this.length; j++) {
                res[i].push(this[j][i])
            }
        }
        return res
    }
    //计算行列式结果
Array.prototype.det = function () {
        // 方阵约束
        if (this.length !== this[0].length) {
            throw new Error();
        }
        // 方阵阶数
        let n = this.length;
        let result = 0;
        if (n > 3) {
            // n 阶
            for (let column = 0; column < n; column++) {
                // 去掉第 0 行第 column 列的矩阵
                let matrix = this.slice(1).map(item => item.slice(0, item.length - 1))
                for (let i = 0; i < n - 1; i++) {
                    for (let j = 0; j < n - 1; j++) {
                        if (j < column) {
                            matrix[i][j] = this[i + 1][j];
                        } else {
                            matrix[i][j] = this[i + 1][j + 1];
                        }
                    }
                }
                result += this[0][column] * Math.pow(-1, 0 + column) * matrix.det();
            }
        } else if (n === 3) {
            // 3 阶
            result = this[0][0] * this[1][1] * this[2][2] +
                this[0][1] * this[1][2] * this[2][0] +
                this[0][2] * this[1][0] * this[2][1] -
                this[0][2] * this[1][1] * this[2][0] -
                this[0][1] * this[1][0] * this[2][2] -
                this[0][0] * this[1][2] * this[2][1];
        } else if (n === 2) {
            // 2 阶
            result = this[0][0] * this[1][1] - this[0][1] * this[1][0];
        } else if (n === 1) {
            // 1 阶
            result = this[0][0];
        }
        return result;
    }
    //计算伴随矩阵
Array.prototype.adjoint = function () {
    if (this[0].length !== this.length) {
        throw new Error();
    }

    let n = this.length;

    let result = new Array(n).fill(0).map(arr => new Array(n).fill(0));
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < n; column++) {
            // 去掉第 row 行第 column 列的矩阵
            let matrix = [];
            for (let i = 0; i < this.length; i++) {
                if (i !== row) {
                    let arr = [];
                    for (let j = 0; j < this.length; j++) {
                        if (j !== column) {
                            arr.push(this[i][j]);
                        }
                    }
                    matrix.push(arr);
                }
            }
            result[row][column] = Math.pow(-1, row + column) * matrix.det();
        }
    }
    return result.Transpose();
}
Array.prototype.Inversion = function () {
    if (this[0].length !== this.length) {
        throw new Error();
    }
    let detValue = this.det();
    let result = this.adjoint();
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            result[i][j] = result[i][j] / detValue;
        }
    }
    return result;
}
export let PI = 3.1415926
let kela = {
    a: 6378245,
    b: 6356863.018773,
    f: 1 / 298.257,
}
Object.defineProperties(kela, {
    ee: {
        get() {
            return (Math.pow(this.a, 2) - Math.pow(this.b, 2)) / Math.pow(this.a, 2)
        }
    },
    e1e1: {
        get() {
            return (Math.pow(this.a, 2) - Math.pow(this.b, 2)) / Math.pow(this.b, 2)
        }
    }
})
let sf = {
    a: 6378140,
    b: 6356755.288157528,
    f: 1 / 298.257,
}
Object.defineProperties(sf, {
    ee: {
        get() {
            return (Math.pow(this.a, 2) - Math.pow(this.b, 2)) / Math.pow(this.a, 2)
        }
    },
    e1e1: {
        get() {
            return (Math.pow(this.a, 2) - Math.pow(this.b, 2)) / Math.pow(this.b, 2)
        }
    }
})
let CGCS = {
    a: 6378137,
    b: 6356752.3141,
    f: 1 / 298.257222,
}
Object.defineProperties(CGCS, {
    ee: {
        get() {
            return (Math.pow(this.a, 2) - Math.pow(this.b, 2)) / Math.pow(this.a, 2)
        }
    },
    e1e1: {
        get() {
            return (Math.pow(this.a, 2) - Math.pow(this.b, 2)) / Math.pow(this.b, 2)
        }
    }
})
export let EllipsoidParam = [kela, sf, CGCS]

export function dr(angle) {
    let a = Math.floor(angle)
    let b = Math.floor((angle - a) * 100)
    let c = (angle - a - b / 100) * 10000
    let rad = (a + b / 60 + c / 3600) * PI / 180
    return rad
}

export function rd(rad) {
    let a, b, c
    if (rad > 0) {
        rad = rad * 180 / PI;
        a = Math.floor(rad);
        b = Math.floor((rad - a) * 60);
        c = (rad - a - b / 60) * 3600;
        rad = a + b / 100 + c / 10000;
    }
    if (rad < 0) {
        rad = Math.abs(rad);
        rad = rad * 180 / PI;
        a = Math.floor(rad);
        b = Math.floor((rad - a) * 60);
        c = (rad - a - b / 60) * 3600;
        rad = -(a + b / 100 + c / 10000);
    }
    return rad;
}

export function TransRect(B, L, H, type) {
    let N = type.a / Math.sqrt(1 - type.ee * Math.pow(Math.sin(dr(B)), 2)) //卯酉圈曲率半径
    let X = (N + H) * Math.cos(dr(B)) * Math.cos(dr(L))
    let Y = (N + H) * Math.cos(dr(B)) * Math.sin(dr(L))
    let Z = (N * (1 - type.ee) + H) * Math.sin(dr(B))
    return [X, Y, Z]
} //BLH=>XYZ
export function ReTransRect(X, Y, Z, type) {
    let L = Math.atan(Y / X)
    let TB = 0,
        TH = 0
    let N0 = type.a
    let H = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2) + Math.pow(Z, 2)) - Math.sqrt(type.a * type.b)
    let B = Math.atan(Z / (Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)) * (1 - type.ee * N0 / (N0 + H))))
    while (Math.abs(H - TH) > 0.0001 && Math.abs(rd(B) - TB) > 0.0000001) {
        TH = H
        TB = rd(B)
        N0 = type.a / Math.sqrt(1 - type.ee * Math.pow(Math.sin(B), 2))
        H = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)) / Math.cos(B) - N0
        B = Math.atan(Z / (Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)) * (1 - type.ee * N0 / (N0 + H))))
    }
    return [rd(B), rd(L + PI), H]
} //YXZ=>BLH
export function TransToPM(B, L, H, type) {
    let B1 = dr(B)
    let L0 = (Math.floor(L / 6) + 1) * 6 - 3
    L0 = L - L0 > 0 ? L0 : Math.floor(L / 6) * 6 - 3
    let l = dr(L) - dr(L0)
    let t = Math.tan(B1)
    let N = type.a / Math.sqrt(1 - type.ee * Math.pow(Math.sin(B1), 2)) //卯酉圈曲率半径
    let nn = type.e1e1 * Math.pow(Math.cos(B1), 2)

    let A0 = 1 + 3 * type.ee / 4 + 45 * Math.pow(type.ee, 2) / 64 + 350 * Math.pow(type.ee, 3) / 512 + 11025 * Math.pow(type.ee, 4) / 16384
    let A2 = -(3 * type.ee / 4 + 15 * Math.pow(type.ee, 2) / 16 + 525 * Math.pow(type.ee, 3) / 512 + 17640 * Math.pow(type.ee, 4) / 16384) / 2
    let A4 = (15 * Math.pow(type.ee, 2) / 64 + 210 * Math.pow(type.ee, 3) / 512 + 8820 * Math.pow(type.ee, 4) / 16384) / 4
    let A6 = -(35 * Math.pow(type.ee, 3) / 512 + 2520 * Math.pow(type.ee, 4) / 16384) / 6
    let A8 = 315 * Math.pow(type.ee, 4) / (16384 * 8)

    let X = type.a * (1 - type.ee) * (A0 * B1 + A2 * Math.sin(2 * B1) + A4 * Math.sin(4 * B1) + A6 * Math.sin(6 * B1) + A8 * Math.sin(8 * B1))
    let x = X + l * l * N * Math.sin(B1) * Math.cos(B1) / 2 + Math.pow(l, 4) * N * Math.sin(B1) * Math.pow(Math.cos(B1), 3) * (5 - t * t + 9 * nn + 4 * nn * nn) / 24 + Math.pow(l, 6) * N * Math.sin(B1) * Math.pow(Math.cos(B1), 5) * (61 - 58 * t * t + Math.pow(t, 4)) / 720
    let y = l * N * Math.cos(B1) + l * l * l * N * Math.pow(Math.cos(B1), 3) * (1 - t * t + nn) / 6 + Math.pow(l, 5) * N * Math.pow(Math.cos(B1), 5) * (5 - 18 * t * t + Math.pow(t, 4) + 14 * nn - 58 * nn * t * t) / 120
    return [x, y + (Math.floor(L / 6) + 1) * 1000000, H]
} //BLH=>xyh

export function TransToDD(x, y, h, type) {
    let rn = Math.floor(y / 1000000) //带号
    let L0 = rn * 6 - 3
    let yy = y - rn * 1000000

    let m0 = type.a * (1 - type.ee)
    let m2 = 3 * type.ee * m0 / 2
    let m4 = 5 * type.ee * m2 / 4
    let m6 = 7 * type.ee * m4 / 6
    let m8 = 9 * type.ee * m6 / 8
    let a0 = m0 + m2 / 2 + 3 * m4 / 8 + 5 * m6 / 16 + 35 * m8 / 128
    let a2 = m2 / 2 + m4 / 2 + 15 * m6 / 32 + 7 * m8 / 16
    let a4 = m4 / 8 + 3 * m6 / 16 + 7 * m8 / 32
    let a6 = m6 / 32 + m8 / 16
    let a8 = m8 / 128

    let tBf = 0
    let Bf = x / a0
    while (Math.abs(Bf - tBf) >= 0.0000000001) {
        tBf = Bf
        Bf = (x - (-a2 * Math.sin(2 * tBf) / 2 + a4 * Math.sin(4 * tBf) / 4 - a6 * Math.sin(6 * tBf) / 6 + a8 * Math.sin(8 * tBf) / 8)) / a0
    }
    let tf = Math.tan(Bf)
    let nf2 = type.e1e1 * Math.pow(Math.cos(Bf), 2)
    let Wf = Math.sqrt(1 - type.ee * Math.pow(Math.sin(Bf), 2))
    let Nf = type.a / Wf
    let Mf = type.a * (1 - type.ee) / Math.pow(Wf, 3)
    let B = Bf - tf * yy * yy / (2 * Mf * Nf * Math.cos(Bf)) + tf * (5 + 3 * tf * tf + nf2 - 9 * nf2 * tf * tf) * Math.pow(yy, 4) / (24 * Mf * Math.pow(Nf, 3)) - tf * (61 + 90 * tf * tf + 45 * Math.pow(tf, 4)) * Math.pow(yy, 6) / (720 * Mf * Math.pow(Nf, 5))
    let l = yy / (Nf * Math.cos(Bf)) - (1 + 2 * tf * tf + nf2) * Math.pow(yy, 3) / (6 * Math.pow(Nf, 3) * Math.cos(Bf)) + (5 + 28 * tf * tf + 24 * Math.pow(tf, 4) + 6 * nf2 + 8 * nf2 * tf * tf) * Math.pow(yy, 5) / (120 * Math.pow(Nf, 5) * Math.cos(Bf))
    L0 = rd(l) < 3 ? L0 : (rn - 1) * 6 - 3

    return [rd(B), rd(l) + L0, h]
} //xyh=>BLH