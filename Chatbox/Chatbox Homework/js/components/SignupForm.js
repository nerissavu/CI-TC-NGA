const $template = document.createElement('template');
$template.innerHTML = `
    <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-auth.js"></script>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <form id="signup-form" >
        <h1>Create Account</h1>
        <div class="social-container">
            <a href="https://www.facebook.com/Remedia-111536797318273" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/RemediaV" class="social"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/remediavietnam/" class="social"><i class="fab fa-instagram"></i></a>
            <a href="mailto: remediavietnam@gmai.com" class="social"><i class="far fa-envelope"></i></a>

        </div>
        <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
        <button id="realsignUp">Sign Up</button>
    </form>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            background: #f6f5f7;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Montserrat', sans-serif;
            height: 100vh;
            margin: -20px 0 50px;
        }

        h1 {
            font-weight: bold;
            margin: 0;
        }

        p {
            font-size: 14px;
            font-weight: 100;
            line-height: 20px;
            letter-spacing: 0.5px;
            margin: 20px 0 30px;
        }

        a {
            color: #333;
            font-size: 14px;
            text-decoration: none;
            margin: 15px 0;
        }

        button {
            border-radius: 20px;
            border: 1px solid #000080;;
            background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%); 
            color: #FFFFFF;
            font-size: 12px;
            font-weight: bold;
            padding: 12px 45px;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: transform 80ms ease-in;
            margin-top: 10px;
        }

        button:active {
            transform: scale(0.95);
        }

        button:focus {
            outline: none;
        }

        button.ghost {
            background-color: transparent;
            border-color: #FFFFFF;
        }

        form {
            background-color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 50px;
            height: 100%;
            text-align: center;
        }

        .social-container {
            margin: 20px 0;
        }
        
        .social-container a {
            border: 1px solid #dddddd;
            border-radius: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 5px;
            height: 40px;
            width: 40px;
        }
    </style>
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
        this.$SignupForm.onsubmit = (event) => {
            event.preventDefault();
            let email = this.$email.value;
            let password = this.$password.value;

            if(email == '') {
                this.$email.error = "Input your email"
                console.log("Input your email");
            } else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
                this.$email.error = "";
            } else {
                this.$email.error = "You have entered an invalid email address!";
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