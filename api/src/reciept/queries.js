const get_all_reciept = "SELECT * FROM reciept";
const get_reciept_by_id = "SELECT * FROM reciept WHERE reciept_id=$1";
const update_reciept = "UPDATE reciept SET teller_id=$1 WHERE reciept_id=$2";
const remove_reciept = "DELETE FROM reciept WHERE reciept_id=$1";
const add_reciept = "INSERT INTO reciept(reciept_id, customer_id, teller_id) VALUES($1, $2, $3)";




module.exports={
    get_all_reciept,
    get_reciept_by_id,
    update_reciept,
    remove_reciept,
    add_reciept,
}