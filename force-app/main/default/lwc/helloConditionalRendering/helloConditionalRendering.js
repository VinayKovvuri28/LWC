import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    name;

    handleCLick =  (event) => this.isVisible = true;

    handleChange = (event) => {
        this.name = event.target.value = event.target.value.toLowerCase();
        // this.name = event.target.value
    }

    get helloHandle() {
        return this.name === 'hello';
    }

    // falsy values
    // x = 0, false, undefined, null, ""
}