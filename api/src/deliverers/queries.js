const get_all_delivery_report = "SELECT * FROM delivery";
const get_delivery_report_by_id = "SELECT * FROM delivery WHERE delivery_id=$1";
const delivered_products = "SELECT * FROM delivery WHERE delivery_report ='delivered'";
const progress_products = "SELECT * FROM delivery WHERE delivery_report ='in-progress'";
const not_yet_products = "SELECT * FROM delivery WHERE delivery_report ='not-yet'";




module.exports = {
    get_all_delivery_report,
    get_delivery_report_by_id,
    delivered_products,
    progress_products,
    not_yet_products,
}