const defaultEnding = ['picture', 'almost'];
const basicFlowEntry = ['talentpool', 'gear', 'brand', 'model', 'picture', 'almost'].concat(defaultEnding);

export default class Flows {
    static readonly items ={
      beginningFlow: ['itemSelection'],
      // basicFlow's
      basicFlow: basicFlowEntry.concat([]),
      scubaCylinder: ['size'].concat(defaultEnding),
      newProfile: [],
      extendedFlow: ['size', 'year', 'serial', 'receipt', 'notes', 'done'],
      sosContact: ['sosRelation', 'sosPhone'],
      generalFlow: ['generalItems', 'notes', 'done'],
    }
}
