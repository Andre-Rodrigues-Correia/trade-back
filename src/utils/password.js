import bcrypt from 'bcrypt';

const SALT = 10;

async function encryptPassword(password) {
    const saltPassword = await bcrypt.genSalt(SALT);
    return await bcrypt.hash(password, saltPassword);
}

export {encryptPassword}