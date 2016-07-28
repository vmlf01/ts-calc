class Calc {
    public static isEven(x: number): boolean {
        return x % 2 === 0;
    }

    constructor() {
        throw new Error('Calc is a static class!');
    }
}

export default Calc;
