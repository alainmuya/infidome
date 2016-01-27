module.exports = {
  "inputs": {
    "id_patient": {
      "example": 3,
      "friendlyName": "id_patient",
      "required": true
    },
    "id_nurse": {
      "example": 2,
      "friendlyName": "id_nurse",
      "required": true
    },
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Mypatient instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "id_patient": 3,
        "id_nurse": 2,
        "id": 123,
        "createdAt": "2016-01-25T17:16:42.193Z",
        "updatedAt": "2016-01-25T17:16:42.193Z"
      }]
    },
    "error": {
      "example": undefined
    }
  },
  "sync": false,
  "cacheable": false,
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.mypatient.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_mypatient"
};