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