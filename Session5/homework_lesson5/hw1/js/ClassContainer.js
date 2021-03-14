import PeopleContainer from './PeopleContainer.js'
const $template = document.createElement('template');
$template.innerHTML = `
    <div>
        <div id="name"></div>
        <br>
        <div id="teacher"></div>
        <div id="students"></div>
        <div id="status"></div>
        <br>
        <br>
    </div>

`

export default class ClassContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name = this.shadowRoot.getElementById('name');
        this.$teacher = this.shadowRoot.getElementById('teacher');
        this.$students = this.shadowRoot.getElementById('students');
        this.$status = this.shadowRoot.getElementById('status');
    }

    static get observedAttributes(){
        return['name','teacher','students','status'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'name'){
            this.$name.innerHTML = newValue
        }else if(attrName == 'teacher'){
            let teacher = JSON.parse(newValue); 
            let $teacherContainer = document.createElement('people-container');
            $teacherContainer.setAttribute('name', teacher.name)
            $teacherContainer.setAttribute('age', teacher.age)
            $teacherContainer.setAttribute('address', teacher.address)

            this.$teacher.appendChild($teacherContainer);

        }else if(attrName == 'students'){
            let students = JSON.parse(newValue); 
            console.log(students)
            for(let student of students) {
                let $studentContainer = document.createElement('people-container');
                $studentContainer.setAttribute('name', student.name)
                $studentContainer.setAttribute('age', student.age)
                $studentContainer.setAttribute('address', student.address)

                this.$students.appendChild($studentContainer);
            }
        }else if(attrName == 'status'){
            this.$status.innerHTML = newValue;
        }
    }
}

window.customElements.define('class-container',ClassContainer);

