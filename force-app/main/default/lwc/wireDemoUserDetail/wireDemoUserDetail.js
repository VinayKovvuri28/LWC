import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import PROFILE_ID from '@salesforce/schema/User.ProfileId'
import PROFILE_NAME from '@salesforce/schema/User.Profile.Name'
import ROLE_ID from '@salesforce/schema/User.UserRoleId'
import ROLE_NAME from '@salesforce/schema/User.UserRole.Name'
import MANAGER_NAME from '@salesforce/schema/User.Manager.Name'


const fields = [NAME_FIELD, EMAIL_FIELD, PROFILE_ID, PROFILE_NAME, ROLE_ID, ROLE_NAME, MANAGER_NAME ]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    
    userDetail
    /* 
        @wire(adapter, adapterConfig)
        property (or) function 
    */
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailHandler({data, error}){
        if(data){
            console.log(data)
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getRecord, {recordId:'$userId', fields})
    userDetailProperty
}