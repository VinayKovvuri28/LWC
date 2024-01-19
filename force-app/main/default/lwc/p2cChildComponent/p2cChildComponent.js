import { LightningElement, api } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    @api progress;
    @api tataCarDetails;
    val = 20;

    handleOnchange(event){
        this.val = event.target.value
    }
    
    @api resetSlider(){
        this.val = 10
    }
}