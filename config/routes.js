module.exports.routes = {
  "post /check_double_email": {
    "target": "Check_double_emailController.create"
  },
  "post /login": {
    "target": "LoginController.create"
  },
  "post /updatepassword": {
    "target": "UpdatepasswordController.create"
  },
  "post /newuserpassword": {
    "target": "NewuserpasswordController.post_create"
  },
  "get /newuserpassword": {
    "target": "NewuserpasswordController.get_find"
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
  "post /addnurse": {
    "target": "AddnurseController.create"
  },
  "get /": {
    "target": "Home$Controller.find"
  },
  "post /addpatient": {
    "target": "AddpatientController.create"
  }
};