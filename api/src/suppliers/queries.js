const get_suppliers = "SELECT * FROM supplier";
const get_suppliers_by_id = "SELECT * FROM supplier WHERE supplier_id=$1";
const remove_supplier = "DELETE FROM supplier WHERE supplier_id=$1";
const update_supplier = "UPDATE supplier SET supplier_name=$1 WHERE supplier_id=$2";





module.exports = {
    get_suppliers,
    get_suppliers_by_id,
    remove_supplier,
    update_supplier,
}