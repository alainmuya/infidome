var Machine = require("machine");
module.exports = {
    'create': function(req, res) {
        Machine.build({
            inputs: {
                "newPassword": {
                    "example": "abcde",
                    "required": true
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Load session data
                sails.machines['0ab17fbc-e31c-430d-85a4-929318f5e715_0.4.0'].load({
                    "key": "sess"
                }).setEnvironment({
                    req: req
                }).exec({
                    "error": function(loadSessionData) {
                        return exits.error({
                            data: loadSessionData,
                            status: 500
                        });

                    },
                    "notFound": function(loadSessionData) {
                        return exits.error({
                            data: loadSessionData,
                            status: 500
                        });

                    },
                    "success": function(loadSessionData) {
                        // Find One Nurse
                        sails.machines['_project_4212_0.0.0'].findOne_nurse({
                            "criteria": {
                                email: loadSessionData
                            }
                        }).setEnvironment({
                            sails: sails
                        }).exec({
                            "success": function(findOneNurse) {
                                // Encrypt password
                                sails.machines['e05a71f7-485d-443a-803e-029b84fe73a4_2.3.0'].encryptPassword({
                                    "password": inputs.newPassword
                                }).exec({
                                    "error": function(encryptPassword) {
                                        return exits.error({
                                            data: encryptPassword,
                                            status: 500
                                        });

                                    },
                                    "success": function(encryptPassword) {
                                        // Update Nurse
                                        sails.machines['_project_4212_0.0.0'].update_nurse({
                                            "name": (findOneNurse && findOneNurse.name),
                                            "lastname": (findOneNurse && findOneNurse.lastname),
                                            "email": (findOneNurse && findOneNurse.email),
                                            "password": encryptPassword,
                                            "inami": (findOneNurse && findOneNurse.inami),
                                            "tel": (findOneNurse && findOneNurse.tel),
                                            "criteria": {
                                                email: loadSessionData
                                            }
                                        }).setEnvironment({
                                            sails: sails
                                        }).exec({
                                            "success": function(updateNurse) {
                                                return exits.respond({
                                                    data: {
                                                        email: (findOneNurse && findOneNurse.email)
                                                    },
                                                    action: "display_view",
                                                    status: 200,
                                                    view: "loginPage"
                                                });

                                            },
                                            "error": function(updateNurse) {
                                                return exits.respond({
                                                    action: "respond_with_status",
                                                    status: 500
                                                });

                                            }
                                        });

                                    }
                                });

                            },
                            "error": function(findOneNurse) {
                                return exits.error({
                                    data: findOneNurse,
                                    status: 500
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
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};