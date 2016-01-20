var Machine = require("machine");
module.exports = {
    'create': function(req, res) {
        Machine.build({
            inputs: {
                "name": {
                    "example": "maxime",
                    "required": true
                },
                "lastname": {
                    "example": "rodrigez",
                    "required": true
                },
                "adresse": {
                    "example": "rue du marchand 159, bruxelles",
                    "required": true
                },
                "SIS": {
                    "example": 198921,
                    "required": true
                },
                "telephone": {
                    "example": 46554323,
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Create Patient
                sails.machines['_project_4212_0.0.0'].create_patient({
                    "name": inputs.name,
                    "lastname": inputs.lastname,
                    "adresse": inputs.adresse,
                    "SIS": inputs.SIS,
                    "Status": "h",
                    "telephone": inputs.telephone
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(createPatient) {
                        return exits.respond({
                            data: {
                                name: (createPatient && createPatient.name)
                            },
                            action: "respond_with_value_and_status",
                            status: 200
                        });

                    },
                    "error": function(createPatient) {
                        return exits.error({
                            data: createPatient,
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};