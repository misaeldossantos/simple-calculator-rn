import { makeAutoObservable } from "mobx";
import { TypeSequence } from "./Enums";

export default class Calculator {
     numberInVisor = ""
     sequence = []
     result = ""

     constructor() {
          makeAutoObservable(this)
     }

     tapNumber(number) {
          this.numberInVisor += number
     }

     tapOperator(operator) {
          if (!this.numberInVisor) {
               const lastItemInSequence = this.sequence[this.sequence.length - 1]
               if (lastItemInSequence?.type === TypeSequence.OPERATOR) {
                    lastItemInSequence.value = operator
               }
               return
          }

          this.sequence.push({
               type: TypeSequence.NUMBER,
               value: Number(this.numberInVisor)
          })

          this.sequence.push({
               type: TypeSequence.OPERATOR,
               value: operator
          })

          this.resetNumberInVisor()
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

     }
}
