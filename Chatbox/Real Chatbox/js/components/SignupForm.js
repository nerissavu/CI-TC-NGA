const $template = document.createElement('template');
$template.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <form id="signup-form" class="p-3">
        <h2 class="text-center">Sign up a new account</h2>
        <p class="text-muted text-center">We are different, We make you different.</p>
        <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
        <button class="btn btn-primary btn-block">Signup</button>

    </form>
`

export default class SignupForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$SignupForm = this.shadowRoot.getElementById('signup-form')
        this.$email = this.shadowRoot.getElementById('email')
        this.$password= this.shadowRoot.getElementById('password')
    }
    // Được gọi duy nhất khi thẻ lần đầu tiên xuất hiện trong body
    connectedCallback() {
        this.$LoginForm.onsubmit = (event) => {
            event.preventDefault();
            let email = this.$email.value;
            let password = this.$password.value;

            if(email == '') {
                this.$email.error = "Input your email"
                console.log("Input your email");
            } else {
                this.$email.error = "";
            }

            if(password == '') {
                this.$password.error = "Input your password"
                console.log("Input your password");
            } else {
                this.$password.error = "";
            }
        }
    }
}

window.customElements.define('signup-form', SignupForm)