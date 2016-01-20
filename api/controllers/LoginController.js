var Machine = require("machine");
module.exports = {
    'create': function(req, res) {
        Machine.build({
            inputs: {
                "email": {
                    "example": "abc123"
                },
                "password": {
                    "example": "l0lcatzz",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Find One Nurse
                sails.machines['_project_4212_0.0.0'].findOne_nurse({
                    "criteria": {
                        email: inputs.email
                    }
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(findOneNurse) {
                        // Check password
                        sails.machines['e05a71f7-485d-443a-803e-029b84fe73a4_2.3.0'].checkPassword({
                            "passwordAttempt": inputs.password,
                            "encryptedPassword": (findOneNurse && findOneNurse.password)
                        }).exec({
                            "error": function(checkPassword) {
                                return exits.respond({
                                    data: "password not exist",
                                    action: "respond_with_value_and_status",
                                    status: 500
                                });

                            },
                            "incorrect": function(checkPassword) {
                                return exits.error({
                                    data: checkPassword,
                                    status: 500
                                });

                            },
                            "success": function(checkPassword) {
                                return exits.respond({
                                    data: "/",
                                    action: "redirect",
                                    status: 200
                                });

                            }
                        });

                    },
                    "error": function(findOneNurse) {
                        return exits.respond({
                            data: null,
                            action: "display_view",
                            status: 500,
                            view: "loginPage"
                        });

                    },
                    "notFound": function(findOneNurse) {
                        return exits.error({
                            data: findOneNurse,
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