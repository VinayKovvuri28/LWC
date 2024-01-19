import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import {MessageContext, publish} from 'lightning/messageService'
export default class LmsComponentA extends LightningElement {
    inputValue

    //The MessageContext object provides information about the Lightning web component that is using the Lightning message service. and store info in context
    @wire(MessageContext)
    context 

    inputHandler(event){
        this.inputValue = event.target.value
    }

    publishMessage(){
        const message={
            lmsData:{
                value:this.inputValue
            }
        }
        //publish(messageContext, messageChannel, message)
        publish(this.context, SAMPLEMC, message)
        //this.context is the MessageContext object which has info of the current lightning wed component using LMS
        //SAMPLEMC is the reference of the Message Channel
        //message is the data to publish
    }
}