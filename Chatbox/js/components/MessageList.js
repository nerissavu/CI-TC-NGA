const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div id="message-list">
    </div>
`;

export default class MessageList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$list = this.shadowRoot.getElementById('message-list');
    }

    static get observedAttributes(){
        return ['messages'];
        // messages: JSON
        // Javascript Object Notation
        // - string: có quy tắc
    }

    attributeChangedCallback(attrName, oldValue, newValue){
        // newValue: string(JSON)
        if(attrName == 'messages') {
            let messages = JSON.parse(newValue);
            for(let message of messages ){
                //tạo và gán thuộc tính cho message-container
                let $messageContainer = document.createElement('message-container')
                $messageContainer.setAttribute('content',message.content);
                $messageContainer.setAttribute('owned',message.owned);
                //thêm message-container vào list
                this.$list.appendChild($messageContainer)
            }
        } 
    }
}



window.customElements.define('message-list', MessageList);