var Machine = require("machine");
module.exports = {
    'find': function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Send to all
                sails.machines['9e74ee33-0e44-4494-bbd3-addd4b36573f_1.2.1'].blast({
                    "eventName": "message",
                    "data": "hello peapel"
                }).setEnvironment({
                    sails: sails
                }).exec({
                    "error": function(sendToAll) {
                        return exits.error({
                            data: sendToAll,
                            status: 500
                        });

                    },
                    "success": function(sendToAll) {
                        return exits.respond({
                            data: null,
                            action: "display_view",
                            status: 200,
                            view: "homepage"
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