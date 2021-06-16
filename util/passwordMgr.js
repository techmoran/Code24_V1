const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.generatePassword = async (password) =>{
    return await bcrypt.hash(password, saltRounds)
}