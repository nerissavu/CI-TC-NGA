const $template = document.createElement('template');
$template.innerHTML = `
    <div>
        <div id="name"></div>
        <div id="age"></div>
        <div id="address"></div>
        <br>
    </div>

`

export default class PeopleContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name = this.shadowRoot.getElementById('name');
        this.$age = this.shadowRoot.getElementById('age');
        this.$address = this.shadowRoot.getElementById('address');
    }

    static get observedAttributes(){
        return['name','age','address'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'name'){
            this.$name.innerHTML = newValue
        }else if(attrName == 'age'){
            this.$age.innerHTML = newValue
        }else if(attrName == 'address'){
            this.$address.innerHTML = newValue;
        }
    }
}

window.customElements.define('people-container',PeopleContainer);

