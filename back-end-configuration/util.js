import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
    return jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email,
    }, config.JWT_SECRET, {
        expiresIn: '48h'
    })
}
export { getToken }