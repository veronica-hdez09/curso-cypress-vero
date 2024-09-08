import { LoginElements } from "./login.elements";

//Aquí se crean los métodos para login
export class LoginMethods{
    /*Se crean métodos para insertar el username y password, llamando los elementos que fueron 
    creados en la clase LoginElements*/
    static insertUsername(username){
        LoginElements.textboxes.username.type(username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
    /*Va a llamar los 3 métodos creados anteriormente (inserUsername, insertPassword y 
    clickOnLoginButton)*/
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}