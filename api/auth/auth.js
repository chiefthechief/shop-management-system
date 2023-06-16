const hasher = require("bcrypt")

function hash_pass(pass){
    const salt = hasher.genSaltSync();
    return hasher.hashSync(pass, salt)
}

function compare_pass(raw, hash){
    return hasher.compareSync(raw, hash);
}

module.exports = {
    hash_pass,
    compare_pass,
}