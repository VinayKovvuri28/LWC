import { LightningElement, wire } from 'lwc';
import{CurrentPageReference} from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';


export default class PubsubComponentB extends LightningElement {
    fullName
    @wire(CurrentPageReference) pageRef
    connectedCallback(){
        this.callSubscriber()
    }
    callSubscriber(){
        registerListener('fromPublisher', this.handleEvent, this)
    }
    
    handleEvent(payload){
        this.fullName = payload
    }

    callUnsubscriber(){
        unregisterAllListeners(this)
    }

    disconnectedCallback(){
        callUnsubscriber()
    }
}