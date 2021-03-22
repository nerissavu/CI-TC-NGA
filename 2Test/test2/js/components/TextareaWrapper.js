const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div class="form-group ">
        <textarea rows="3" type="text" id="input" class="form-control" placeholder="This is input"></textarea>
        <div id="error" class="text-danger"></div>
    </div>
`;

export default class TextareaWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$input = this.shadowRoot.getElementById('input');
        this.$error = this.shadowRoot.getElementById('error');
    }

    static get observedAttributes() {
        return ['placeholder', 'error', 'default'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {

            case 'placeholder': 
                this.$input.placeholder = newValue;
                break;

            case 'error':
                this.$error.innerHTML = newValue;
                break;

            case 'default': 
                this.$input.value = newValue;
                break;
        }
    }

    get value() {
        return this.$input.value;
    }

    set error(message) {
        this.setAttribute('error', message);
    }

    // condition: callback
    validate(condition, message) {
        if(condition(this.value)) { 
            this.error = "";
            return true;
        } else {
            this.error = message;
            return false;
        }
    }
}

window.customElements.define('textarea-wrapper', TextareaWrapper);