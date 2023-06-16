const get_all_sales = "SELECT * FROM sold";
const get_sale_by_id = "SELECT * FROM sold where sold_id = $1";
const add_sale = "INSERT INTO sold(sold_id, product_id, product_qty, mode, transmission, customer_id, reciept_id) VALUES($1,$2,$3,$4,$5,$6,$7)";
const update_sale = "UPDATE sold SET product_id=$1 WHERE sold_id=$2";
const remove_sale = "DELETE FROM sold WHERE sold_id=$1";

//report element queries here


module.exports = {
    get_all_sales,
    get_sale_by_id,
    add_sale,
    update_sale,
    remove_sale,
}