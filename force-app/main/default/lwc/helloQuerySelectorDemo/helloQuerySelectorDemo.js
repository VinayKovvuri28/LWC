import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    value
    ceoList = [
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },
        {
            id: 2,
            company: "Apple Inc.",
            name: "Tim cook"
        },
        {
            id: 3,
            company: "Facebook",
            name: "Mark Zuckerberg"
        },
        {
            id: 4,
            company: "Amazon",
            name: "Jeff Bezos"
        },
    ];

    fetchDetailsHandler() {
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText);
        this.value = elem.innerText

        const ceoNames = this.template.querySelectorAll('.name');
        Array.from(ceoNames).forEach(item => {
            console.log(item.innerText)
            item.setAttribute('title', item.innerText);
        })
        // lwc:dom="manual"
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<u>List of CEO in top companys</u>'
    }
}