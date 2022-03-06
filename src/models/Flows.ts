const defaultEnding = ['picture', 'almost'];
const basicFlowEntry = ['talentpool', 'gear', 'brand', 'model'].concat(defaultEnding);

export default class Flows {
    static readonly items ={
      beginningFlow: ['itemSelection'],
      // basicFlow's
      basicFlow: basicFlowEntry,
      scubaCylinder: ['material', 'size', 'notes'].concat(defaultEnding),
      newProfile: [],
      extendedFlow: ['size', 'year', 'serial', 'receipt', 'notes', 'done'],
      sosContact: ['sosRelation', 'sosPhone'],
      generalFlow: ['generalItems', 'notes', 'done'],
      passport_primary_flow: ['oldDate', 'newDate', 'picture', 'done'],
      key_primary_flow: ['keyUsage', 'notes', 'done'],
    }
}
