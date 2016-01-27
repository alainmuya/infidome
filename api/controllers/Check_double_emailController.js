var Machine = require("machine");
module.exports = {
    'create': function(req, res) {
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
                        return exits.respond({
                            data: findOneNurse,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(findOneNurse) {
                        return exits.respond({
                            data: "no value",
                            action: "respond_with_value_and_status",
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