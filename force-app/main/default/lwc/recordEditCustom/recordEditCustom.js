import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue=''
    handleChange(event){ 
        this.inputValue = event.target.value
    }
    handleSubmit(event){ 
        event.preventDefault()
        const inputCmp = this.template.querySelector('lightning-input')
        const value= inputCmp.value
        if(!value.includes('Account')){ 
            inputCmp.setCustomValidity("The account name must include 'Account'")
        } else { 
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()

    }
    successHandler(event){ 
        this.showToast("Account created", `"Record ID: " ${event.detail.id}`, "success")

    }
    handleError(event){ 
        this.showToast("Error creating Account", `${event.detail.message}`, "error")
    }

    showToast(title, message, variant){ 
        const event = new ShowToastEvent({ 
            title, 
            message, 
            variant, // (variant => "success", "error", "warning" and "info")
            mode:'sticky' //(modes => dismissable(default,  userclick or 3sec), pester(visible for 3sec) and sticky(visible until userclick))
        })
        this.dispatchEvent(event)
    }
}