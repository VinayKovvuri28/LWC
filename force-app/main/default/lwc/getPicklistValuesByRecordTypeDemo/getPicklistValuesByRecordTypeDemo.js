import { LightningElement, wire } from 'lwc';
import {getPicklistValuesByRecordType, getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    ratingOptions
    industryOptions
    citiesInAPOptions
    selectedRating
    selectedIndustry
    selectedCitiesInAP
    selectedRecordType= ''
    recordTypesOptions=[]
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){
            console.log('data from GetPicklistValuesByRecordTypeDemo: ',data)
            console.log('data.recordTypeInfos : ',data.recordTypeInfos)
            console.log('this.generatePicklistValuesFromRecordTypes(data): ',JSON.stringify(this.generatePicklistValuesFromRecordTypes(data)))
            this.recordTypesOptions = [...this.generatePicklistValuesFromRecordTypes(data)]
            console.log('this.recordTypesOptions: ',JSON.stringify(this.recordTypesOptions))
        }
    }

    generatePicklistValuesFromRecordTypes(data){
        // convert object to array
        let arr = Object.values(data.recordTypeInfos).map(
            ({ name: label, recordTypeId: value }) => ({
              label,
              value,
            })
          );
        return arr 
    }

    handleRecordType(event) {
        this.selectedRecordType = event.detail.value;
    }

    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT, 
        recordTypeId:'$selectedRecordType'})
        picklistHandler({data, error}){
            if(data){
                console.log(data)
                this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating)
                this.industryOptions = this.picklistGenerator(data.picklistFieldValues.Industry)
                this.citiesInAPOptions = this.picklistGenerator(data.picklistFieldValues.Citys__c)
            }
            if(error){
                console.error(error)
            }
        }

    picklistGenerator(data){
        return data.values.map(item=>({"label":item.label, "value":item.value}))
    }

    handleChange(event){
        const {name, value} = event.target
        console.log(name +'==>' +value)
        if(name === 'industry'){
            this.selectedIndustry = value
        }
        if(name === 'rating'){
            this.selectedRating = value
        }
        if(name === 'cities'){
            this.selectedCitiesInAP = value
        }
    }
}