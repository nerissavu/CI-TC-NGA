const $template = document.createElement('template');
$template.innerHTML =  /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

`

export default class LoaningList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$totalMoneyNumber = this.shadowRoot.getElementById('total-money-number');

    }

    static get observedAttributes() {
        return ['loanings'];
    }

    attributeChangedCallback(attrName, oldValue, newValue){
        // newValue: string(JSON)
        if(attrName == 'loanings') {
            let loanings = JSON.parse(newValue);
            for(let loaning of loanings ){
                //tạo và gán thuộc tính cho message-container
                let $messageContainer = document.createElement('loaning-container')
                $messageContainer.setAttribute('name',message.name);
                $messageContainer.setAttribute('money',message.money);
                $messageContainer.setAttribute('purposes',message.purposes);
                $messageContainer.setAttribute('predicting-return-date',message.date);
                $messageContainer.setAttribute('done',false);
                //thêm message-container vào list
                this.$list.appendChild($messageContainer)
            }
        } 
    }

}
window.customElements.define('loaning-list', LoaningList)