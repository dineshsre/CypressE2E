import { orangeHRM } from "../../Pages/orangeHRMLoginDemo"
const orangeHRMobj = new orangeHRM()
import orangeHRMData from "../../fixtures/orangeHRMData.json"

describe("OrangeHEM login Test Demo",()=>{

    it("Validate login Page",()=>{
        orangeHRMobj.OpenURL();
        orangeHRMobj.setUerName(orangeHRMData.uname);
        orangeHRMobj.setpassword(orangeHRMData.upwd);
        orangeHRMobj.clkLogin();
    })

})