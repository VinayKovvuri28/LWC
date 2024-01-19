import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class RecordFormDemo extends LightningElement {
    @api recordId
    @api objectApiName
    objectName = ACCOUNT_OBJECT
    createdRecordId
    fieldsArray = [NAME_FIELD, ANNUAL_REVENUE_FIELD, TYPE_FIELD, INDUSTRY_FIELD]

    successHandler(event){ 
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