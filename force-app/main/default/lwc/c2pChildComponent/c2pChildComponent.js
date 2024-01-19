import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {

    fullName

    submitClickHandler(event){
        this.fullName=this.refs.userName?.value
        
        const myEvent = new CustomEvent('myevent', {
            bubbles : true,
            composed : true,
            detail : {name : this.fullName}
        })
        this.dispatchEvent(myEvent)
    }

}