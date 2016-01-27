module.exports = {
  "inputs": {
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Mypatient instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "id_patient": 3,
        "id_nurse": 2,
        "id": 123,
        "createdAt": "2016-01-25T17:16:42.193Z",
        "updatedAt": "2016-01-25T17:16:42.193Z"
      }
    },
    "error": {
      "example": undefined
    },
    "notFound": {
      "void": true
    }
  },
  "sync": false,
  "cacheable": false,
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.mypatient.findOne(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, record) {
      if (err) {
        return exits.error(err);
      }
      if (!record) {
        return exits.notFound();
      }
      return exits.success(record);
    });
  },
  "identity": "findOne_mypatient"
};