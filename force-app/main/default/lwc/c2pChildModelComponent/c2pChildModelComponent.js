import { LightningElement } from 'lwc';

export default class C2pChildModelComponent extends LightningElement {

    closeHandler() {
        const myEvent = new CustomEvent('close', {
            bubbles:true,
            detail:'Model closed Successfully!'
        })
        this.dispatchEvent(myEvent)
    }
}