import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
export default class RecordEditForm extends LightningElement {
    objectName = CONTACT_OBJECT
    createdRecordId = "0035j00001KsE1SAAV"
    fields={ 
        accountField:ACCOUNT_FIELD,
        nameField:NAME_FIELD,
        titleField:TITLE_FIELD,
        phoneField:PHONE_FIELD,
        emailField:EMAIL_FIELD
    }
    handleReset(){ 
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){ 
            Array.from(inputFields).forEach(field=>{ 
                field.reset()
            })
        }
    }

    successHandler(event) {
        console.log(event.detail.id)
        this.createdRecordId = event.detail.id
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