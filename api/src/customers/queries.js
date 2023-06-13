const get_all_workers = "SELECT customer_id, first_name, last_name, tel_number, email FROM customers";
const get_customer_by_id = "SELECT customer_id, first_name, last_name, tel_number, email FROM customers WHERE customer_id=$1";
const remove_customer = "DELETE FROM customers WHERE customer_id=$1";
const add_customer = "INSERT INTO customers(customer_id, first_name, last_name, tel_number, email, password) VALUES($1, $2, $3, $4, $5, $6)";
const exist = "SELECT customer_id, email FROM customers WHERE customer_id=$1 AND email=$2"






module.exports = {
    get_all_workers,
    get_customer_by_id,
    remove_customer,
    add_customer,
    exist,
}