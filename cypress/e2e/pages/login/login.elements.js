//Aquí se crean los web elements diferenciados por tipos
export class LoginElements{
    //Se crea un getter para los textboxes o inputs.
    static get textboxes(){
        return{
            get username(){
                return cy.get('input#loginusername');
            },
            get password(){
                return cy.get('input#loginpassword');
            }
        };
    }

    //Se crea un getter para los botones
    static get buttons(){
        return{
            get close(){
                return cy.get('div[id="logInModal"] button').eq(1);
            },
            get login(){
                return cy.contains('button', 'Log in');
            }
        };
    }
}