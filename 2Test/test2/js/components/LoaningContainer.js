const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    
    <div id="loaning-container" class="justify-content-between p-3">
        <h3 class="font-weight-bold">Danh sách tài khoản cho vay
        </h3>
        <div class="card mb-3 " >
        <div class="card-body">
            <div class="info d-flex">
                <h4 class="card-text font-weight-bold pr-2" >Name :</h4>
                <h4 class="font-weight-light" id="name"></h4>
            </div>
            
            <div class="info d-flex">
                <h4 class="card-text font-weight-bold pr-2">Money:</h4>
                <h4 class="font-weight-light" id="money"></h4>
            </div>
            <div class="info d-flex">
                <h4 class="card-text font-weight-bold pr-2">Purposes: </h4>
                <h4 class="font-weight-light" id="purposes"></h4>
            </div>
            
            <div class="info d-flex">
                <h4 class="card-text font-weight-bold pr-2">Predicting Return Date: </h4>
                <h4 class="font-weight-light" id="predicting-return-date"></h4>
            </div>
            
            <div class="info d-flex">
                <h4 class="card-text font-weight-bold pr-2">Real Return Date: </h4>
                <h4 class="font-weight-light" id="real-return-date"></h4>
            </div>
            <button id="acquitance-confirmation" class="btn btn-primary btn-small ">Acquittance Confirmation </button>
        </div>
        </div>
    </div>

`;

export default class LoaningContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$container = this.shadowRoot.getElementById('loaning-container');
        this.$name = this.shadowRoot.getElementById('name');
        this.$money = this.shadowRoot.getElementById('money');
        this.$purposes = this.shadowRoot.getElementById('purposes');
        this.$predictingReturnDate = this.shadowRoot.getElementById('predicting-return-date');
    }

    static get observedAttributes(){
        return ['name','money','purposes','predicting-return-date','done']
    }

    attributeChangedCallback(attrName, oldValue, newValue){
        if(attrName == 'name') {
            this.$name.innerHTML = newValue;
        } else if(attrName == 'money'){
            this.$money.innerHTML = newValue;
        } else if(attrName == 'purposes'){
            this.$purposes.innerHTML = newValue;
        } else if(attrName == 'predicting-return-date'){
            this.$predictingReturnDate.innerHTML = newValue;
        } else if(attrName == 'done'){
            if(newValue == true){

            }else{
                
            }
        }
    }
}

window.customElements.define('loaning-container', LoaningContainer);