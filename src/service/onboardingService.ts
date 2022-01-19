import { BaseService } from "./baseService";

export  class OnboardingService extends BaseService
{
    constructor(){
        super()
    };

    updateOnboarding(value:any) {
        return this.connection.update({
            in: 'onboarding',
            set: value,
            where: {
                id: 1
            }
        });
    }

     

    insertOnboarding(): void{

        let newData = {
            id:1, //primary key
            gear:"",
            brand:"",
            model:""
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


 


