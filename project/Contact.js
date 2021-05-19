// import React from 'react';
// import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {

        {/*4. New form is created.
    This section will render first because authorized has been set to false by default.
        Has onSubmit attribute with a value of athorize, that will run the authorize method above and check if the password is correct or not. */}
    const login = ( 
      <form action="#" onSubmit={this.authorize}> 
      <input type="password" placeholder="Password"/> 
      <input type="submit"/> </form> );

           {/*6. Contact Info section that will render if user is authorised */}
    const contactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );
    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
        {/*7. Ternary operator that will toggle between contact  and login header. Outcome depends if user has logged in and is authorised or not. 
        Truthy = Display contact header
        Falsy = Display login header*/}

        {this.state.authorized ? contactInfo : login }
         {/*8 Ternary operator that will toggle between contactinfo and the login variables. Outcome depends if user has logged in and is authorised or not. 
         If it is authorised, it will render the contact info page. If not authorised, then it will render the login stuff */}
      </div>
    );
  }
}

// ReactDOM.render(
//   <Contact />, 
//   document.getElementById('auth-form')
// );