import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LmsComponentX extends LightningElement {
    recievedMessage
    subscription

    //The MessageContext object provides information about the Lightning web component that is using the Lightning message service. and store info in context
    @wire(MessageContext)
    context

    // Encapsulate logic for Lightning message service subscribe
    subscribeToMessageChannel() {
        //subscribe(messageContext, messageChannel, listener, subscriberOptions)
        if (!this.subscription) {
            this.subscription= subscribe(
                this.context, 
                SAMPLEMC, 
                (message) => {this.handleMessage(message)}, 
                {scope:APPLICATION_SCOPE}
            );
        //this.context is the MessageContext object which has info of the current lightning wed component using LMS
        //SAMPLEMC is the reference of the Message Channel
        //listener is a function to receive messageon on a message channel from anywhere in the application.
        //pass the subscriberOptions as {scope:APPLICATION_SCOPE}
        }
    }

    // Handler for message received by component
    handleMessage(message){
        this.recievedMessage = message.lmsData.value? message.lmsData.value :'NO Message published'
    }

    // Encapsulate logic for Lightning message service unsubsubscribe
    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription)
        this.subscription = null
    }

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback(){
        this.subscribeToMessageChannel()
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    // Helper
    dispatchToast(error) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error loading contact',
                message: 'Error',
                variant: 'error',
            })
        );
    }
}