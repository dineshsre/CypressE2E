import { registerPage } from "../Pages/registerPage"
import regData from "../fixtures/regData.json"
const regobj = new registerPage()
describe("Register Page Test ",()=>{

    it("Validate Register Page",()=>{
        regobj.openURL();
        regobj.enterFirstName(regData.firstName);
        regobj.enterLastName(regData.lastName);
        regobj.enterEmail(regData.email);
        regobj.enterTelephone(regData.telephone);
        regobj.enterPassword(regData.password);
        regobj.enterCPassword(regData.cpassword);
        regobj.enterPPolicy();
        regobj.clksubmit();

    })

})