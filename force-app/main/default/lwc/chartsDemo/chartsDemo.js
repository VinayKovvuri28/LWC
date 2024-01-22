import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities'
export default class ChartsDemo extends LightningElement {
    pieChartLabels=[]
    pieChartData=[]
    @wire(getOpportunities)
    opportunityHandler({data, error}){
        if(data){
            console.log(data)
            const result = data.reduce((json, val)=>({...json, [val.StageName]:(json[val.StageName] | 0)+1}), {})
            if(Object.keys(result).length){
                console.log('Chart Labels in par: ',JSON.stringify(Object.keys(result)))
                console.log('Chart Data in par: ',JSON.stringify(Object.values(result)))
                this.pieChartLabels = Object.keys(result)
                this.pieChartData = Object.values(result)
            }
        }
        if(error){
            console.error(error)
        }
    }
}