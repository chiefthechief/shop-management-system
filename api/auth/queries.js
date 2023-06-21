const get_user_auth = "SELECT id, email, password FROM workers WHERE email = $1 UNION SELECT id, email, password FROM customers WHERE email = $1";
const get_specific_user = "SELECT id, email, password FROM workers WHERE id = $1 UNION SELECT  id, email, password FROM customers WHERE id = $1";

module.exports = {
    get_user_auth,
    get_specific_user,
}