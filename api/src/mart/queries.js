const get_customer_wishlist = "SELECT product_id FROM mart WHERE customer_id= $1 AND type = 'wishlist'";
const get_customer_cart = "SELECT product_id, qty FROM mart WHERE customer_id = $1 AND type = 'cart'";
const get_available_items = "SELECT product_name, item_image FROM inventory WHERE product_qty > 1";
const get_particular_product = "SELECT product_name, item_image FROM inventory WHERE product_id = $1";
const add_item = "INSERT INTO mart(customer_id, product_id, type, qty) VALUES($1, $2, $3, $4)";





module.exports = {
    get_available_items,
    get_customer_cart,
    get_customer_wishlist,
    get_particular_product,
    add_item,
}