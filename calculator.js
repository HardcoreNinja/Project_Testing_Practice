const calculator = {
    add(a, b){
        return a + b;
    },
    subtract(a, b){
        return a - b;
    },
    multiply(a, b){
        return a * b;
    },
    divide(a, b){
       return b === 0 ? "Not a number..." : a / b;
    }
};

export{calculator};