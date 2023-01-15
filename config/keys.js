//  USERNAME_FROM_MONGODB - This is your User Name from "Database Access"
//  PASSWORD_FROM_MONGODB - Your password from "Database Access".
//                          (Important! This is not your main account password from Atlas. You must use password from "SECURITY -> Database Access -> User Name")
//  CLUSTER_NAME_FROM_MONGODB - Your cluster name from "Database Deployments"

const USERNAME_FROM_MONGODB = "YOUR_USERNAME";
const PASSWORD_FROM_MONGODB = "YOUR_PASSWROD";
const CLUSTER_NAME_FROM_MONGODB = "YOUR_CLUSTER";

uri =
  `mongodb+srv://(${USERNAME_FROM_MONGODB}):` +
  encodeURIComponent(PASSWORD_FROM_MONGODB) +
  `@(${CLUSTER_NAME_FROM_MONGODB}).zsrttvb.mongodb.net/?retryWrites=true&w=majority`;

module.exports = {
  mongoURI: uri,
};