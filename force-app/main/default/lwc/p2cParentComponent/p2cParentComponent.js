import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    progressBar = 10;

    tataCarModels = [
        {
            model : 'Punch',
            src : 'https://s7ap1.scene7.com/is/image/tatamotors/TornadoBlue-0-1?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 6.00 Lakh'
        },
        {
            model : 'Nexon',
            src : 'https://s7ap1.scene7.com/is/image/tatamotors/Twilightpurple-0?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 8.10 Lakh'
        },
        {
            model : 'Nexon EV',
            src : 'https://s7ap1.scene7.com/is/image/tatapassenger/IntensiTeal-0?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 14.74 Lakh'
        },
        {
            model : 'Harrier',
            src : 'https://s7ap1.scene7.com/is/image/tatamotors/CoralRed-0?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 15.49 Lakh'
        },
        {
            model : 'Safari',
            src : 'https://s7ap1.scene7.com/is/image/tatamotors/StellarFrost-0?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 16.19 Lakh'
        },
        {
            model : 'Tiago',
            src : 'https://imgd.aeplcdn.com/642x361/n/cw/ec/53481/tata-tiago-left-front-three-quarter5.jpeg?wm=1&q=80',
            price: '₹ 5.60 Lakh'
        },
        {
            model : 'Tiago EV',
            src : 'https://s7ap1.scene7.com/is/image/tatapassenger/DaytonaGrey-0?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 8.69 Lakh'
        },
        {
            model : 'Altroz',
            src : 'https://s7ap1.scene7.com/is/image/tatamotors/OperaBlue-0-1?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 6.60 Lakh'
        },
        {
            model : 'Tigor',
            src : 'https://s7ap1.scene7.com/is/image/tatamotors/MagneticRed-0-2?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 6.30 Lakh'
        },
        {
            model : 'Tigor EV',
            src : 'https://s7ap1.scene7.com/is/image/tatapassenger/SignatureTealBlue-0-1?$PO-850-600-S$&fit=crop&fmt=png-alpha',
            price: '₹ 12.49 Lakh'
        },  
    ]

    handleOnchange(event) {
        this.progressBar = event.target.value
    }

    handleResetChildSlider(){
        this.template.querySelector('c-p2c-child-component').resetSlider()
    }
}