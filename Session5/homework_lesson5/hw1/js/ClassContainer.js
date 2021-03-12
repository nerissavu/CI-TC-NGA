const $template = document.createElement('template');
$template.innerHTML = `
    <div>
        <div id="name"></div>
        <br>
        <div id="teacher"></div>
        <br>
        <div id="students"></div>
        <br>
        <div id="status"></div>
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

    // được gọi khi thuộc tính được định nghĩa thay đổi giá trị
    attributeChangedCallback(attrName, oldValue, newValue) {
        // console.log("thuộc tính"+ attrName+ "thay đổi giá trị thành:" + newValue)

        if(attrName == 'name'){
            this.$name.innerHTML = newValue
        // }else if(attrName == 'teacher'){
        //     // this.$teacher.innerHTML = newValue
        //     let teacher = JSON.parse(newValue)
        //     console.log(teacher)
        //     let $classContainer = document.createElement('class-container');
        //     $classContainer.setAttribute('name', teacher.name)
        //     $classContainer.setAttribute('age', teacher.age)
        //     $classContainer.setAttribute('address', teacher.address)

        //     this.$teacher.appendChild($classContainer);

        // }else if(attrName == 'students'){
        //     // this.$students.innerHTML = newValue;
        //     let students = JSON.parse(newValue); 
        //     console.log(students)
        //     for(let student of students) {
        //         let $classContainer = document.createElement('todo-container');
        //         $classContainer.setAttribute('name', student.name)
        //         $classContainer.setAttribute('description', student.age)
        //         $classContainer.setAttribute('deadline', student.address)

        //         this.$students.appendChild($classContainer);
        //     }
        }else if(attrName == 'status'){
            this.$status.innerHTML = newValue;
        }
    }
}

window.customElements.define('class-container',ClassContainer);

