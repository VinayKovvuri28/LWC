import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class RecordViewFormDemo extends LightningElement {
    @api recordId
    @api objectApiName

    staticRecordId = "0015j00001X32JgAAJ"
    objectName = ACCOUNT_OBJECT
    fields={
        nameField:NAME_FIELD,
        annualRevenueField:ANNUAL_REVENUE_FIELD,
        typeField:TYPE_FIELD,
        industryField:INDUSTRY_FIELD
    }
}