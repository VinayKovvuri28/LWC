import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethodInLwc.html';

export default class RenderMethodInLwc extends LightningElement {
    selectedBtn=''
    render() {
        return (this.selectedBtn === 'Signup' ? signupTemplate : this.selectedBtn === 'Signin' ? signinTemplate : renderTemplate )
    }

    handleClick(event) {
        this.selectedBtn = event.target.label
    }

    submitHandler(event) {
        console.log(`${event.target.label} Successfully!!`)
    }
}