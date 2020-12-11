import Calculator from "../Calculator";
import {Operators} from "../Enums";

describe("test Calculator class", () => {
    const calculator = new Calculator()

    it("should change numberInDisplay on tap number", () => {
        calculator.tapNumber(1)
        calculator.tapNumber(4)
        expect(calculator.numberInDisplay).toBe("14")
    })

    it("should returns correct number after tap backspace", () => {
        calculator.tapBackspace()
        expect(calculator.numberInDisplay).toBe("1")
    })

    it("should change sequence on tap operator", () => {
        calculator.tapOperator(Operators.SUM)
        expect(calculator.sequence[0]?.value).toBe(1)
        expect(calculator.sequence[1]?.value).toBe(Operators.SUM)
    })

    it("should returns correct last item", () => {
        expect(calculator.lastItem?.value).toBe(Operators.SUM)
    })

    it("should returns that last item is operator", () => {
        expect(calculator.lastItemIsOperator).toBe(true)
    })

    it("should returns that last item is number after memorize and then it reset number", () => {
        calculator.tapNumber(2)
        calculator.tapNumber(3)
        calculator.memorizeNumberInVisor()
        expect(calculator.lastItem?.value).toBe(23)
        expect(calculator.numberInDisplay).toBe("")
    })

    it("should print correct result value after to calculate", () => {
        calculator.calculate()
        expect(calculator.result).toBe(24)
    })

    it("should reset calculator", () => {
        calculator.reset()
        expect(calculator.numberInDisplay).toBe("")
        expect(calculator.sequence.length).toBe(0)
        expect(calculator.result).toBe("")
    })

    // alternative cases

    it("should show numberInDisplay correct if it tap point", () => {
        calculator.tapNumber(".")
        expect(calculator.numberInDisplay).toBe("0.")
    })

    it("should not register two points", () => {
        calculator.resetNumberInVisor()
        calculator.tapNumber(".")
        calculator.tapNumber("2")
        calculator.tapNumber(".")
        expect(calculator.numberInDisplay).toBe("0.2")
    })
})
