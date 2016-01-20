module.exports = {
  "inputs": {
    "name": {
      "example": "maxime",
      "friendlyName": "name",
      "required": true
    },
    "lastname": {
      "example": "rodrigez",
      "friendlyName": "lastname",
      "required": true
    },
    "adresse": {
      "example": "rue du marchand 159, bruxelles",
      "friendlyName": "adresse",
      "required": true
    },
    "birth_date": {
      "example": "10/06/1979",
      "friendlyName": "birth_date"
    },
    "SIS": {
      "example": 198921,
      "friendlyName": "SIS",
      "required": true
    },
    "Status": {
      "example": "H",
      "friendlyName": "Status",
      "required": true
    },
    "telephone": {
      "example": 46554323,
      "friendlyName": "telephone",
      "required": true
    },
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
    env.sails.models.patient.update(inputs.criteria, env.sails.util.omit(env.sails.util.objCompact(inputs), 'criteria')).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "update_patient"
};