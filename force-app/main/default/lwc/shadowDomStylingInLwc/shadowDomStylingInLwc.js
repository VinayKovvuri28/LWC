import { LightningElement } from 'lwc';

export default class ShadowDomStylingInLwc extends LightningElement {
    isLoaded = false
    renderedCallback() {
        if(this.isLoaded) return
        const style = document.createElement('style')
        style.innerText = `c-shadow-dom-styling-in-lwc .slds-button{
            background: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded=true
    }
}