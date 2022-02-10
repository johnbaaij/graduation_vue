const basicFlowEntry = ['talentpool', 'gear'];

export default class Flows {
    static readonly items ={
      beginningFlow: ['itemSelection'],
      // basicFlow's
      basicFlow: basicFlowEntry.concat(['brand', 'model', 'picture', 'almost']),
      scubaCylinder: basicFlowEntry.concat(['size', 'almost']),
      newProfile: [],
      extendedFlow: ['size', 'year', 'serial', 'receipt', 'notes', 'done'],
      sosContact: ['sosRelation', 'sosPhone'],
      generalFlow: ['generalItems', 'notes', 'done'],
    }
}
