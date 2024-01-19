import { LightningElement, wire } from 'lwc';
import{CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class PubsubComponentA extends LightningElement {
    @wire(CurrentPageReference) pageRef

    clickHandler(){
        let fullName = this.refs.yourName?.value
    
        fireEvent(this.pageRef, 'fromPublisher', fullName)
    }
}