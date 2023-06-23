const get_inventory = "SELECT * FROM inventory";
const get_inventory_by_id = "SELECT * FROM inventory WHERE product_id=$1";
const remove_inventory = "DELETE FROM inventory WHERE product_id=$1";
const update_inventory = "UPDATE inventory SET product_name=$1, where product_id=$2";
const add_inventory = "INSERT INTO inventory(product_id, product_name, product_qty, supplier_id, product_price, item_image) VALUES($1, $2, $3, $4, $5, $6)";



module.exports ={
    get_inventory,
    add_inventory,
    get_inventory_by_id,
    remove_inventory,
    update_inventory,
}