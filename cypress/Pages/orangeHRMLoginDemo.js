export class orangeHRM{

    OrangeHRMLocators={
        userName: "input[placeholder='Username']",
        password: "input[placeholder='Passsword']",
        login: "button[type='submit']"
    }

    OpenURL(){
        cy.visit(Cypress.env("orangeURL"))//env variable set in cypress.config.js
    }

    setUerName (uname){
        cy.get(this.OrangeHRMLocators.userName).type(uname);
    }
    setpassword(upwd){
        cy.get(this.OrangeHRMLocators.password).type(upwd);
    } 
    clkLogin(){
        cy.get(this.OrangeHRMLocators.login).click();
    }

}