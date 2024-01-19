import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {

    toastHandler(){ 
        this.showToast("Success!!", "{0} Account Created!! {1}", "success")
    }
    toastHandlerTwo(){ 
        this.showToast("Error!!", "Account Creation Failed!!", "error")
    }
    toastHandlerThree(){ 
        this.showToast("Warning!!", "Password should have 15 characters!!", "warning")
    }
    toastHandlerFour(){ 
        this.showToast("Info!!", "Summer 20 realease is available!!", "info")
    }
    showToast(title, message, variant){ 
        const event = new ShowToastEvent({ 
            title, 
            message,
            variant, // (variant => "success", "error", "warning" and "info")
            // messageData : url and label values that replace the {index} placeholders in the message string
            messageData:[
                'Salesforce',{ 
                    url:'http://www.salesforce.com/',
                    label:'Click Here'
                }
            ],
            mode:'sticky' //(modes => dismissable(default,  userclick or 3sec), pester(visible for 3sec) and sticky(visible until userclick))
        })
        this.dispatchEvent(event)
    }
}