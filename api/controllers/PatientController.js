var Machine = require("machine");
module.exports = {
    'find': function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // List Patient
                sails.machines['_project_4212_0.0.0'].find_patient({}).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(listPatient) {
                        return exits.respond({
                            data: {
                                email: listPatient
                            },
                            action: "display_view",
                            status: 200,
                            view: "patient"
                        });

                    },
                    "error": function(listPatient) {
                        return exits.error({
                            data: listPatient,
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