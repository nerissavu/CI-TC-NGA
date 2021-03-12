import BaseComponent from "./baseComponent.js";

const $temmplate = document.createElement('template');
$temmplate.innerHTML = `
    <div>
        <input type="checkbox" id="is-completed">
        <div id="name"></div>
        <div id="description"></div>
        <div id="deadline"></div>
        <div id="sub-tasks"></div>

    </div>
`
export default class TodoContainer extends BaseComponent {
    constructor(){
        super();
        this.shadowRoot.appendChild($temmplate.content.cloneNode(true))

        this.$name = this.shadowRoot.getElementById('name')
        this.$description = this.shadowRoot.getElementById('description')
        this.$deadline = this.shadowRoot.getElementById('deadline')
        this.$isCompleted = this.shadowRoot.getElementById('is-completed')
        this.$subTasks = this.shadowRoot.getElementById('sub-tasks')
    }

    dataChangedCallBack(){
        // console.log(this.data);
        this.$name.innerHTML = this.data.name;
        this.$description.innerHTML = this.data.description;
        this.$deadline.innerHTML = this.data.deadline;
        this.$isCompleted.checked = this.data.$isCompleted;
        
        if(this.data.subTasks != undefined){
            for(let task of this.data.subTasks){
                let $todoContainer = new TodoContainer();
                $todoContainer.data = task;
                this.$subTasks.appendChild($todoContainer);
            }
        }
    }
}
window.customElements.define('todo-container',TodoContainer);
// export default class TodoContainer extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({mode: 'open'})
//         this.shadowRoot.appendChild($temmplate.content.cloneNode(true));

//         this.$isCompleted = this.shadowRoot.getElementById('is-completed');
//         this.$name = this.shadowRoot.getElementById('name');
//         this.$description = this.shadowRoot.getElementById('description');
//         this.$deadline = this.shadowRoot.getElementById('deadline');
//         this.$subTasks = this.shadowRoot.getElementById('sub-tasks')
//     }

//     static get observedAttributes(){
//         return['name','description','deadline','is-completed','sub-tasks']
//     }

//     attributeChangedCallback(attrName, oldValue, newValue){
//         if(attrName == 'name'){
//             this.$name.innerHTML = newValue;
//         }else if(attrName == 'description'){
//             this.$description.innerHTML = newValue;
//         }else if(attrName == 'deadline'){
//             this.$deadline.innerHTML == newValue;
//         }else if(attrName == 'is-completed'){
//             this.$isCompleted.checked = (newValue == 'true') ? true :false;

//             // if(newValue == 'true') {
//             //     this.$isCompleted.checked = true;
//             // } else {
//             //     this.$isCompleted.checked = false
//             // }
//         }else if(attrName == 'sub-tasks'){
//             let subTasks = JSON.parse(newValue); // newValue:JSON --> parse được
//             console.log(subTasks)
//             for(let todoData of subTasks) {
//                 let $todoContainer = document.createElement('todo-container');
//                 $todoContainer.setAttribute('name', todoData.name)
//                 $todoContainer.setAttribute('description', todoData.description)
//                 $todoContainer.setAttribute('deadline', todoData.deadline)
//                 $todoContainer.setAttribute('is-completed', todoData.isCompleted)

//                 this.$subTasks.appendChild($todoContainer);
//             }
//         }

        
//     }
// }

// window.customElements.define('todo-container',TodoContainer);