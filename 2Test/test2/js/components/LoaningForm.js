import {loan} from "../models/loanings.js"

const $template = document.createElement('template');
$template.innerHTML =  /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <form id="loaning-form" class="p-3">
        <h1 class="text-center" >Add Loan</h1>
        <input-wrapper id="name" type="text" placeholder="Name of Debtor"></input-wrapper>
        <input-wrapper id="money" type="number" placeholder="Amount of Money"></input-wrapper>
        <input-wrapper id="date" type="date" placeholder="Predicting Return Date"></input-wrapper>
        <textarea-wrapper id="purposes" placeholder="Purposes of Loaning Money"></textarea-wrapper>
        <br>
        <button class="btn btn-primary btn-small ">Cho vay</button>
    </form>
`;

export default class LoaningForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$loaningForm = this.shadowRoot.getElementById('loaning-form');
        this.$name = this.shadowRoot.getElementById('name');
        this.$money = this.shadowRoot.getElementById('money');
        this.$date = this.shadowRoot.getElementById('date');
        this.$purposes = this.shadowRoot.getElementById('purposes');
    }

    // được gọi 1 lần duy nhất khi thẻ lần đầu tiên xuất hiện trong body
    connectedCallback() {
        this.$loaningForm.onsubmit = (event) => {
            event.preventDefault();
            let name = this.$name.value;
            let money = this.$money.value;
            let date = this.$date.value;
            let purposes = this.$purposes.value;
            console.log(purposes)

            function require(value) {
                return value != '';
            }

            let isPassed =  this.$name.validate(require, "Input your name") &
                            this.$money.validate(require, "Input your amount of money") &
                            this.$date.validate(require, "Input your date") &
                            this.$purposes.validate(require, "Input your purposes") 
                ;

            if (isPassed) {
                loan(name, money, date, purposes);
            }

            
        }
    }
}

window.customElements.define('loaning-form', LoaningForm);