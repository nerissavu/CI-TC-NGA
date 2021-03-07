const $template = document.createElement('template')

$template.innerHTML = `

    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>


    <style>

        .card {
            display: grid;
            width: 300px;
            height: 300px;
            grid-template-columns: 300px;
            grid-template-rows: 80px 150px 60px;
            grid-template-areas: "title" "text" "stats";
            border-radius: 18px;
            background: white;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
            font-family: roboto;
            text-align: center;
        }

        .card-title {
            grid-area: title;
        }
        .card-text {
            grid-area: text;
            }
        .card-stats {
            grid-area: stats; 
            display: flex;
            justify-content: center;
        }

        .card-stats .stat {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: black;
            padding:10px;
        }

        .card:hover {
            transform: scale(1.15);
            box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
            }
        .card {
            transition: 0.5s ease;
            cursor: pointer;
            margin:30px;
        }
    </style>
    
    <div class="card">
        <div class ="card-title">
            <h4 id="name" >Task</h4>
        </div>
        <div class ="card-text">
            <p id="description">This is the description</p>
        </div>
        <div class="card-stats">
            <div class="stat">
                <p id="deadline">2021/03/06</p>
            </div>
            <div class="stat">
                <i id="status" class="fas fa-check"></i>
            </div>
        </div>
    </div>
`;

export default class TaskContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name = this.shadowRoot.getElementById('name');
        this.$description = this.shadowRoot.getElementById('description');
        this.$deadline = this.shadowRoot.getElementById('deadline');
        this.$status = this.shadowRoot.getElementById('status');
    }

    static get observedAttributes(){
        return['name','description','deadline','status'];
    }

    // được gọi khi thuộc tính được định nghĩa thay đổi giá trị
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log("thuộc tính"+ attrName+ "thay đổi giá trị thành:" + newValue)

        if(attrName == 'name'){
            this.$name.innerHTML = newValue
        }else if(attrName == 'description'){
            this.$description.innerHTML = newValue
        }else if(attrName == 'deadline'){
            this.$deadline.innerHTML = newValue;
        }else if(attrName == 'status'){
            this.$status.className = newValue;
        }
    }
}

window.customElements.define('task-container',TaskContainer);
