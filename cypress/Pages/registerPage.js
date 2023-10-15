export class registerPage{

    WebLocators={

        fName: "#input-firstname",
        lName: "#input-lastname",
        Email: "#input-email",
        Telephone: "#input-telephone",
        Password: "#input-password",
        CPassword: "#input-confirm",
        PPolicy: "input[value='1'][name='agree']",
        Continue: "input[value='Continue']"
    }

     openURL(){

        cy.visit(Cypress.env("baseURL"))

    }

     enterFirstName(firstName){
        cy.get(this.WebLocators.fName).type(firstName);
    }

     enterLastName(lastName){
        cy.get(this.WebLocators.lName).type(lastName);
    }
     enterEmail(email){
        cy.get(this.WebLocators.Email).type(email);
    }
     enterTelephone(telephone){
        cy.get(this.WebLocators.Telephone).type(telephone);
    }

     enterPassword(pwd){
        cy.get(this.WebLocators.Password).type(pwd);
    }

    
     enterCPassword(pwd){
        cy.get(this.WebLocators.CPassword).type(pwd);
    }
    
     enterPPolicy(policy){
        cy.get(this.WebLocators.PPolicy).check();
    }

     clksubmit(){
        cy.get(this.WebLocators.Continue).click();
    }


}