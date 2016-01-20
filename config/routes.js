module.exports.routes = {
  "post /addnurse": {
    "target": "AddnurseController.create"
  },
  "post /login": {
    "target": "LoginController.create"
  },
  "post /addpatient": {
    "target": "AddpatientController.create"
  },
  "get /loginpage": {
    "target": "LoginpageController.find"
  },
  "post /homepage": {
    "target": "HomepageController.create"
  },
  "get /calendar": {
    "target": "CalendarController.find"
  },
  "get /patient": {
    "target": "PatientController.find"
  },
  "get /nurse": {
    "target": "NurseController.find"
  },
  "get /": {
    "target": "Home$Controller.find"
  }
};