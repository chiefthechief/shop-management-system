const remove_teller_log = "DELETE FROM teller WHERE teller_log_code=$1";
const log_teller_info = "INSERT INTO teller(teller_id, t_arrival, t_depart, teller_log_code) VALUES($1, $2, $3, $4)";
const update_log_info = "UPDATE teller SET t_depart=$1 WHERE teller_log_code=$2";
const get_all_teller_log = "SELECT * FROM teller";
const get_teller_log = "SELECT * FROM teller where teller_log_code=$1";
const get_all_teller_sales = "SELECT product_id, product_qty, teller_id FROM sold";
const get_teller_sale = "SELECT product_id, product_qty, teller_id FROM sold WHERE teller_id=$1";
const teller_report = "";



module.exports={
    get_all_teller_log,
    remove_teller_log,
    log_teller_info,
    update_log_info,
    teller_report,
    get_teller_sale,
    get_all_teller_sales,
    get_teller_log,
}