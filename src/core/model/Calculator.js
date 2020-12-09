import {makeAutoObservable, toJS} from "mobx";
import {MapOperatorsLogic, TypeSequence} from "./Enums";

export default class Calculator {
    numberInDisplay = ""
    sequence = []
    history = []
    result = ""

    constructor() {
        makeAutoObservable(this)
    }

    tapNumber(number) {
        this.numberInDisplay += number
    }

    tapOperator(operator) {
        if (!this.numberInDisplay) {
            if (this.lastItemIsOperator) {
                this.lastItem.value = operator
            }
            return
        }

        this.memorizeNumberInVisor()

        this.sequence.push({
            type: TypeSequence.OPERATOR,
            value: operator
        })
    }

    get lastItem() {
        return this.sequence[this.sequence.length - 1]
    }

    get lastItemIsOperator() {
        return this.lastItem?.type === TypeSequence.OPERATOR
    }

    memorizeNumberInVisor() {
        if (this.lastItemIsOperator || this.sequence.length === 0) {
            this.sequence.push({
                type: TypeSequence.NUMBER,
                value: Number(this.numberInDisplay)
            })
            this.resetNumberInVisor()
        }
    }

    resetNumberInVisor() {
        this.numberInDisplay = ""
    }

    reset() {
        this.result = ""
        this.numberInDisplay = ""
        this.sequence = []
    }

    tapBackspace() {
        if (this.result) {
            this.result = ""
        } else if (this.numberInDisplay) {
            this.numberInDisplay = this.numberInDisplay.substring(0, this.numberInDisplay.length - 1)
        } else {
            this.sequence.pop()
        }
    }

    calculate() {
        if (this.numberInDisplay) {
            this.memorizeNumberInVisor()
        } else {
            if (this.lastItemIsOperator) {
                this.sequence.pop()
            }
        }

        this.result = eval(this.sequence.map(sq => sq.type === TypeSequence.OPERATOR ?
            MapOperatorsLogic[sq.value] :
            sq.value
        ).join(" "))

        this.history.push({
            sequence: toJS(this.sequence),
            result: 20
        })

        this.sequence = []
    }
}
