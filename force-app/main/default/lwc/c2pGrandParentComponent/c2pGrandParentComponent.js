import { LightningElement } from 'lwc';

export default class C2pGrandParentComponent extends LightningElement {
    userName
    getNameFromChild(event) {
        this.userName = event.detail.name
    }
}