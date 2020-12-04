const userData  = require("../seed_data/users");
const accountData = require("../seed_data/accounts")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert(accountData);
    })
    .then(()=>{
      return knex("users")
        .del();
    })
    .then(()=>{
      // Insert seed entries from users
      return knex("accounts")
      .pluck("id")
      .then(accountIds => {
        return accountIds;
      });
    })
    .then(accountIds =>{
      const userDataWithAccountIds = userData.map(user=>{
        user.account_id = accountIds;
        return user
      });
      return knex("users").insert(userDataWithAccountIds);
    });
};
