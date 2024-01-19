import { LightningElement } from 'lwc';

export default class ChildComponemtLifecycleHooksInLwc extends LightningElement {

    constructor() {
        super()
        console.log('I am in child Componemt constructor() lifecycle hook')
        alert('I am in child Componemt constructor() lifecycle hook')
    }

    connectedCallback() {
        console.log('I am in child Componemt connectedCallback() lifecycle hook')
        alert('I am in child Componemt connectedCallback() lifecycle hook')
        throw new Error('Loading of child component failed')
    }

    renderedCallback() {
        console.log('I am in child Componemt renderedCallback() lifecycle hook')
        alert('I am in child Componemt renderedCallback() lifecycle hook')
    }

    disconnectedCallback() {
        console.log('I am in child Componemt disconnectedCallback() lifecycle hook')
        alert('I am in child Componemt disconnectedCallback() lifecycle hook')
    }

}