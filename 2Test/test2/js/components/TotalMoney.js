const $template = document.createElement('template');
$template.innerHTML =  /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

        <div id="total-money-container" class="d-flex justify-content-between p-3">
            <h3 class="font-weight-bold">Total Money:
                <span id="total-money-number"></span>
            </h3>
            <button class="btn btn-primary btn-small ">Cho vay</button>
        </div>
    
`

export default class TotalMoney extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$totalMoneyNumber = this.shadowRoot.getElementById('total-money-number');

    }

    static get observedAttributes() {
        return ['value'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case 'value':
                this.$totalMoneyNumber.innerHTML = newValue;
                break;
        }
    }

}
window.customElements.define('total-money', TotalMoney)