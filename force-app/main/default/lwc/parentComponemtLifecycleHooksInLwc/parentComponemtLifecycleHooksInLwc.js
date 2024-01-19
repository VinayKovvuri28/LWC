import { LightningElement } from 'lwc';

export default class ParentComponemtLifecycleHooksInLwc extends LightningElement {
    isChildVisible = false
    buttonTitle = 'Show Child'
    count = 0;
    constructor() {
        super()
        console.log('I am in parent Componemt constructor() lifecycle hook')
    }

    connectedCallback() {
        console.log('I am in parent Componemt connectedCallback() lifecycle hook')
    }

    renderedCallback() {
        console.log('I am in parent Componemt renderedCallback() lifecycle hook')
    }

    handleClick() {
        if (this.count%2===0){
            this.isChildVisible = true
            this.buttonTitle = 'Hide Child'
        }
        else {
            this.isChildVisible = false
            this.buttonTitle = 'Show Child'
        }
        this.count++
    }

    errorCallback(error, stack) {
        console.log(error.message)
        console.log(stack)
    }
}