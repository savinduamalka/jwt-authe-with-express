import UserType from "../interfaces/UserType";
import jwt from "jsonwebtoken";
export const generateJwt = (user: UserType) => {
    const token = jwt.sign({
        sub: user.username,
    }, process.env.JWT_SECRET || 'secret', {
        expiresIn: "1h"
    });
    return token;
}
export const validateJwt = (token: string) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret' );
    if(decoded) {
        return true;
    }
    return false;
}
export const getUsernameFromJwt = (token: string) => {
    const decoded = jwt.decode(token);
    if(decoded !== null) {
        return decoded.sub;
    }
    return null;
}