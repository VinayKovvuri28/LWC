import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /***Data binding example */
    fullName = "Kovvuri Vinay Kumar Reddy";
    courseName = "Salesforce";
    // changeHandler(event) {
    //     this.courseName = event.target.value;
    // }
    changeHandler = (event) => {
        this.courseName = event.target.value;
    }

    /***@track binding example */
    @track address = {
        doorNo : "16-22-79/2b",
        street : "Satya Nagar",
        cityName : "Kakinada",
        stateName : "Andhra Pradesh",
        pinCode : "533003",
        country : "India"
    }
    trackHandler = (event) => this.address.cityName = event.target.value;

    /***getter example */
    users = ["john", "smith", "nik"]
    num1 = 10
    num2 = 20
    // this.firstUser =this.users[0]
    get firstUser(){
        return this.users[0].toUpperCase()
    }

    get multiply(){
        return this.num1*this.num2
    }
}