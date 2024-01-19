import { LightningElement } from 'lwc';

export default class NewConditionalRenderingDirectives extends LightningElement {
    showText = false

    get getLabel() {
        return this.showText ? 'Hide Text' : 'Show Text'
    }
    showTextHandler = (event) => {
        this.showText =!this.showText;
    }

    /****Getter demo */

    country1 = 'INDIA';
    country2 = 'AUSTRALIA';
    country3 = 'CANADA';
    country = '';
    changeHandler(event) {
        this.country = event.target.value = event.target.value.toUpperCase();
    }
    
    get isCountryIndia() {
        console.log("isCountryIndia getter called");
        return this.country === this.country1;
    }
    get isCountryAustralia(){
        console.log("isCountryAustralia getter called");
        return this.country === this.country2;
    }
    get isCountryCanada(){
        console.log("isCountryCanada getter called");
        return this.country === this.country2;
    }
}