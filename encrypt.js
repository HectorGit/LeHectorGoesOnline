const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const cryptokey = process.env.cryptokey || 'secretPassword';

function encrypt(text){
	const cipher = crypto.createCipher(algorithm, cryptokey);
	let crypted = cipher.update(text,'utf8','hex');
	crypted += cipher.final('hex');
	return crypted;
}

function decrypt(text){
	const decipher = crypto.createCipher(algorithm, cryptokey);
	let dec = decipher.update(text, 'hex', 'utf8');
	dec += decipher.final('utf8');
	return dec;
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;
