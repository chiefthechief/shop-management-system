const get_all_workers = "SELECT id, first_name, last_name, tel_number, email FROM customers";
const get_customer_by_id = "SELECT id, first_name, last_name, tel_number, email FROM customers WHERE id=$1";
const remove_customer = "DELETE FROM customers WHERE id=$1";
const add_customer = "INSERT INTO customers(id, first_name, last_name, tel_number, email, password, customer_address) VALUES($1, $2, $3, $4, $5, $6, $7)";
const exist = "SELECT id, email FROM customers WHERE id=$1 OR email=$2"
const update_customer = "UPDATE customers SET first_name=$1 WHERE id=$2";
const customer_log_in = "SELECT id, email, password FROM customers where email=$1";







module.exports = {
    get_all_workers,
    get_customer_by_id,
    remove_customer,
    add_customer,
    exist,
    update_customer,
    customer_log_in,
}