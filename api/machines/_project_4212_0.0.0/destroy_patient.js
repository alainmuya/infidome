module.exports = {
  "inputs": {
    "criteria": {
      "friendlyName": "criteria",
      "typeclass": "dictionary",
      "description": "Waterline search criteria to use in retrieving Patient instances"
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": [{
        "name": "maxime",
        "lastname": "rodrigez",
        "adresse": "rue du marchand 159, bruxelles",
        "birth_date": "10/06/1979",
        "SIS": 198921,
        "Status": "H",
        "telephone": 46554323,
        "id": 123,
        "createdAt": "2016-01-18T23:26:18.606Z",
        "updatedAt": "2016-01-18T23:26:18.606Z"
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
    env.sails.models.patient.destroy(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "destroy_patient"
};