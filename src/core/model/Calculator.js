import { makeAutoObservable, toJS } from "mobx";
import { TypeSequence } from "./Enums";

export default class Calculator {
     numberInVisor = ""
     sequence = []
     history = []
     result = ""

     constructor() {
          makeAutoObservable(this)
     }

     tapNumber(number) {
          this.numberInVisor += number
     }

     tapOperator(operator) {
          if (!this.numberInVisor) {
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
                    value: Number(this.numberInVisor)
               })
               this.resetNumberInVisor()
          }
     }

     resetNumberInVisor() {
          this.numberInVisor = ""
     }

     reset() {
          this.numberInVisor = ""
          this.sequence = []
     }

     tapBackspace() {
          if (this.numberInVisor) {
               this.numberInVisor = this.numberInVisor.substring(0, this.numberInVisor.length - 1)
          } else {
               this.sequence.pop()
          }
     }

     calculate() {
          if (this.numberInVisor) {
               this.memorizeNumberInVisor()
          } else {
               if (this.lastItemIsOperator) {
                    this.sequence.pop()
               }
          }

          const result = 20
          this.result = result

          this.history.push({
               sequence: toJS(this.sequence),
               result: 20
          })
          
          this.sequence = []          
     }
}
