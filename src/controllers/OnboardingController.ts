import OnboardingService from '@/service/onboardingService';

interface onboarding{
    id?:number, // primary key
    gear?:string,
    brand?:string,
    model?:string
}

class OnboardingController {
    private service:OnboardingService = new OnboardingService();

    async retrieveDB():Promise<void> {
      const results = await this.service.connection.select({
        from: 'onboarding',
      });
        // results will be array of objects.
      console.log(results);
    }

    setupDB():void {
      this.service.insertOnboarding();
    }

    async onboardingSafe(object:onboarding):Promise<void> {
      this.setupDB();
      this.service.updateOnboarding(object);
    }
}
export default OnboardingController;
