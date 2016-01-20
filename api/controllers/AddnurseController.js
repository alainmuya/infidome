var Machine = require("machine");
module.exports = {
    'create': function(req, res) {
        Machine.build({
            inputs: {
                "password": {
                    "example": "l0lcatzz",
                    "required": true
                },
                "name": {
                    "example": "alain",
                    "required": true
                },
                "lastname": {
                    "example": "biron",
                    "required": true
                },
                "email": {
                    "example": "alin@gmail.com",
                    "required": true
                },
                "inami": {
                    "example": "109jh1212",
                    "required": true
                },
                "telephone": {
                    "example": 4432134323,
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Encrypt password
                sails.machines['e05a71f7-485d-443a-803e-029b84fe73a4_2.3.0'].encryptPassword({
                    "password": inputs.password
                }).exec({
                    "error": function(encryptPassword) {
                        return exits.error({
                            data: encryptPassword,
                            status: 500
                        });

                    },
                    "success": function(encryptPassword) {
                        // Create Nurse
                        sails.machines['_project_4212_0.0.0'].create_nurse({
                            "name": inputs.name,
                            "lastname": inputs.lastname,
                            "email": inputs.email,
                            "password": encryptPassword,
                            "inami": inputs.inami,
                            "tel": inputs.telephone
                        }).setEnvironment({
                            sails: sails
                        }).exec({
                            "success": function(createNurse) {
                                return exits.respond({
                                    data: createNurse,
                                    action: "respond_with_result_and_status",
                                    status: 200
                                });

                            },
                            "error": function(createNurse) {
                                return exits.error({
                                    data: createNurse,
                                    status: 500
                                });

                            }
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