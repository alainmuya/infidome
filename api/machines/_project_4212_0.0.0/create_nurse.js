module.exports = {
  "inputs": {
    "name": {
      "example": "alain",
      "friendlyName": "name",
      "required": true
    },
    "lastname": {
      "example": "biron",
      "friendlyName": "lastname",
      "required": true
    },
    "email": {
      "example": "alin@gmail.com",
      "friendlyName": "email",
      "required": true
    },
    "password": {
      "example": "abcde",
      "friendlyName": "password"
    },
    "inami": {
      "example": "109jh1212",
      "friendlyName": "inami",
      "required": true
    },
    "tel": {
      "example": 4432134323,
      "friendlyName": "tel",
      "required": true
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
    }
  },
  "sync": false,
  "cacheable": false,
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.nurse.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_nurse"
};