import { LightningElement, wire } from 'lwc';
import fetchAllObjectMap from '@salesforce/apex/SoqlController.fetchAllObjectMap';

export default class SoqlComponent extends LightningElement {
    objectList = []
    allObjectsList = []
    customObjectsList = []
    standardObjectsList = []
    fieldList = []
    objectTypeList = [
        {label:'All', value:'All'},
        {label:'Custom', value:'Custom'},
        {label:'Standard', value:'Standard'}
    ]

    @wire(fetchAllObjectMap)
    wireFetchAllObjectMap({data,error}){
        if(data){
            for(let key in result){
                if(key.endswith('__c')){
                    this.customObjectsList.push({ label:key, value:key})
                }else if(!key.endswith('__c')){
                    this.standardObjectsList.push({ label:key, value:key})
                }
                this.allObjectsList.push({ label:key, value:key})
            }
        }
        if(error){
            console.log('error: ', error)
        }
        console.log('this.customObjectsList: ', this.customObjectsList) ;
        console.log('this.standardObjectsList: ', this.standardObjectsList) ;
        console.log('this.allObjectsList: ', this.allObjectsList) ;
    }

    // connectedCallback(){
    //     fetchAllObjectMap()
    //     .then((result) => {
    //         if(result){
    //             for(let key in result){
    //                 if(key.endswith('__c')){
    //                     this.customObjectsList.push({ label:key, value:key})
    //                 }else if(!key.endswith('__c')){
    //                     this.standardObjectsList.push({ label:key, value:key})
    //                 }
    //                 this.allObjectsList.push({ label:key, value:key})
    //             }
    //         }else{
    //             console.log('Objects are not found')
    //         }
    //     }).catch((error) => {
    //         console.log('Objects are not found')
    //         console.log('error: ', error) ;
    //     })
    //     console.log('this.customObjectsList: ', this.customObjectsList) ;
    //     console.log('this.standardObjectsList: ', this.standardObjectsList) ;
    //     console.log('this.allObjectsList: ', this.allObjectsList) ;
    // }

}