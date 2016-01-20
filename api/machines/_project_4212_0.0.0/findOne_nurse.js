module.exports = {
  "inputs": {
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Nurse instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "name": "alain",
        "lastname": "biron",
        "email": "alin@gmail.com",
        "password": "abcde",
        "inami": "109jh1212",
        "tel": 4432134323,
        "id": 123,
        "createdAt": "2016-01-20T16:41:57.822Z",
        "updatedAt": "2016-01-20T16:41:57.822Z"
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
    env.sails.models.nurse.findOne(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, record) {
      if (err) {
        return exits.error(err);
      }
      if (!record) {
        return exits.notFound();
      }
      return exits.success(record);
    });
  },
  "identity": "findOne_nurse"
};