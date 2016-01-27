var Machine = require("machine");
module.exports = {
    'get_find': function(req, res) {
        Machine.build({
            inputs: {
                "email": {
                    "example": "abc123"
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
                        // Save to session
                        sails.machines['0ab17fbc-e31c-430d-85a4-929318f5e715_0.4.0'].save({
                            "key": "sess",
                            "value": (findOneNurse && findOneNurse.email)
                        }).setEnvironment({
                            req: req
                        }).exec({
                            "error": function(saveToSession) {
                                return exits.error({
                                    data: saveToSession,
                                    status: 500
                                });

                            },
                            "success": function(saveToSession) {
                                return exits.respond({
                                    data: {
                                        email: (findOneNurse && findOneNurse.email),
                                        name: (findOneNurse && findOneNurse.name)
                                    },
                                    action: "display_view",
                                    status: 200,
                                    view: "newuserPassword"
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
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    },
    'post_create': function(req, res) {
        Machine.build({
            inputs: {
                "email": {
                    "example": "abc123"
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
                        // Save to session
                        sails.machines['0ab17fbc-e31c-430d-85a4-929318f5e715_0.4.0'].save({
                            "key": "sess",
                            "value": (findOneNurse && findOneNurse.email)
                        }).setEnvironment({
                            req: req
                        }).exec({
                            "error": function(saveToSession) {
                                return exits.respond({
                                    action: "respond_with_status",
                                    status: 500
                                });

                            },
                            "success": function(saveToSession) {
                                return exits.respond({
                                    data: {
                                        email: (findOneNurse && findOneNurse.email),
                                        name: (findOneNurse && findOneNurse.name)
                                    },
                                    action: "display_view",
                                    status: 200,
                                    view: "newuserPassword"
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
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};