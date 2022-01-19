import { OnboardingService } from "@/service/onboardingService";

interface onboarding{
    id?:number, //primary key
    gear?:string,
    brand?:string,
    model?:string
}

export  class OnboardingController{

    private service:OnboardingService = new OnboardingService();

    constructor(){

    }

   async retrieveDB(){
        
        var results = await this.service.connection.select({
            from: "onboarding"
        });
        //results will be array of objects.
        console.log(results);
    }

    setupDB(){
        this.service.insertOnboarding();
    }
    async onboardingSafe(object:onboarding){
        this.setupDB();
        this.service.updateOnboarding(object)
    }
}