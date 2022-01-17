import { BaseService } from "./baseService";

export  class onboardingService extends BaseService
{
    constructor(){
        super()
    };

     

    insertOnboarding(): void{

        let newData = {
            id:90, //primary key
            gear:"some other name",
            brand:"some other address",
            model:"Joe"
        }

        this.connection.insert(
            {
                into: "onboarding",
                upsert:true,
                values: [newData], //you can insert multiple values at a time

            }
        )
    }

    

}


 


