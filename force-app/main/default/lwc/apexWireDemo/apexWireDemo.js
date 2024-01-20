import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import filterAccountByType from '@salesforce/apex/AccountController.filterAccountByType';
import filterAccounts from '@salesforce/apex/AccountController.filterAccounts';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class ApexWireDemo extends LightningElement {
    getAccountRecords
    selectedType = ''
    accountTypeOptions = []
    getFilteredAccounts
    getAccountsByImperatively
    errorImperatively
    delay
    accountName=''
    getAccountsByNameImperatively

    // Wire with property
    @wire(getAccountList)
    wireGetAccountListUsingProperty
    // Wire with function
    @wire(getAccountList)
    wireGetAccountList({data,error}){
        if(data){
            console.log('getAccountList: ', data);
            this.getAccountRecords = data.map(item => {
                let newType = item.Type === 'Customer - Channel' ? 'Channel' : item.Type === 'Customer - Direct' ? 'Direct' : 'No Type'
                return {...item, newType}
            })
        }
        if(error){
            console.log('getAccountListError:', error); 
        }
        
        console.log('getAccountRecords: ', this.getAccountRecords);
    }

    // Wire with function and pass parameters
    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues, { recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:ACCOUNT_TYPE_FIELD })
    typePicklist({data,error}){
        if(data){
            this.accountTypeOptions = [...this.generatePicklist(data)]
            console.log('this.accountTypeOptions: ',JSON.stringify(this.accountTypeOptions))
        }
        if(error){
            console.error(error)
        }
    }

    generatePicklist(data){
        return data.values.map(item=>({ label: item.label, value: item.value }))
    }

    typeSelectionHandler(event){
        this.selectedType = event.target.value;
        this.getFilteredAccounts = ''
    }
    
    @wire(filterAccountByType, {type: '$selectedType'})
    wireGetFilteredAccounts({data,error}){
        if(data){
            this.getFilteredAccounts = data
            console.log('this.getFilteredAccounts:', this.getFilteredAccounts);
        }
        if(error){
            console.log('error:', error);
        }
    }
    
    //Calling Apex Method Using Imperatively
    handleOnclick1(event){
        getAccountList().then((result)=>{
            this.getAccountsByImperatively = result;
            this.errorImperatively = undefined;
        }).catch((error) => {
            this.errorImperatively = error;
            this.getAccountsByImperatively = undefined;
        })
    }

    //Calling Apex Method Using Imperatively with params
    searchHandler(event){
        window.clearTimeout(this.delay)
        this.accountName = event.target.value
        this.delay = setTimeout(()=>{this.callApex()},1000)
    }
    callApex(){
        filterAccounts({name:this.accountName}).then((result)=>{
            this.getAccountsByNameImperatively = result;
            this.errorImperatively = undefined;
        }).catch((error) => {
            this.errorImperatively = error;
            this.getAccountsByNameImperatively = undefined;
        })
    }
}