const get_all_delivery_report = "SELECT * FROM delivery";
const get_delivery_report_by_id = "SELECT * FROM delivery WHERE delivery_id=$1";
const delivery_state = "SELECT * FROM delivery WHERE delivery_report = $1";
const log_delivery = " INSERT INTO delivery(delivery_id, deliverer_id,delivery_report, customer_id, product_id) VALUES ($1, $2, $3, $4, $5)";




module.exports = {
    get_all_delivery_report,
    get_delivery_report_by_id,
    delivery_state,
    log_delivery,
}