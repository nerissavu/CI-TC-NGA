const $template =document.createElement('template');
$template.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <nav class="navbar navbar-expand-sm bg-success">
        <div class ="main-menu">
            <span class="menu-item text-white btn">Tutorial</span>
            <span class="menu-item text-white btn">Reference</span>
            <span class="menu-item text-white btn">Example</span>
            <span class="menu-item text-white btn">Exercise</span>
            <span class="menu-item text-white btn">Courses</span>
        </div>
        <div class ="sub-menu ml-auto">
            <span class="menu-item text-white btn"><i class="fab fa-facebook-square"></i></span>
            <span class="menu-item text-white btn"><i class="fab fa-instagram"></i></span>
            <span class="menu-item text-white btn"><i class="fab fa-linkedin"></i></span>
            <span class="menu-item text-white btn"><i class="fas fa-toggle-on"></i></span>
            <span class="menu-item text-white btn"><i class="fas fa-globe-asia"></i></span>
            <span class="menu-item text-white btn"><i class="fas fa-search"></i></span>
        </div>
    </nav>
`;

export default class MyMenu extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('my-menu',MyMenu);