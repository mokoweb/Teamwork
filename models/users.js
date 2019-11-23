import moment from 'moment';

export default class Users {
  constructor(user) {
    this.userid = user.userid;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.gender = user.gender;
    this.password = user.password;
    this.jobRole = user.jobRole;
    this.createdOn = moment();
    this.department = user.department;
    this.address = user.address;
    this.isAdmin = user.isAdmin;
  }
}