import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    userName
    showChildModel = false
    buttonTitle = 'Show Child'
    messageFromChild = 'Click Show-child button to see message from child'

    handleClick() {
            this.showChildModel= true
    }

    closeChildHandler(event) {
        this.messageFromChild = event.detail
        this.showChildModel = false
    }

    getNameFromChild(event) {
        this.userName = event.detail.name
    }
}