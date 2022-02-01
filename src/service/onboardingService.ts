import BaseService from './baseService';

class OnboardingService extends BaseService {
  updateOnboarding(value:any):void {
    return this.connection.update({
      in: 'onboarding',
      set: value,
      where: {
        id: 1,
      },
    });
  }

  insertOnboarding(): void{
    const newData = {
      id: 1, // primary key
      gear: '',
      brand: '',
      model: '',
    };

    this.connection.insert(
      {
        into: 'onboarding',
        upsert: true,
        values: [newData], // you can insert multiple values at a time

      },
    );
  }
}

export default OnboardingService;
