import { User } from '../../entities/core/user.entity';

export interface IAuthorizationService {

    validateUser(email: string, pass: string): Promise<User>;
    genJWT(userId: number, email: string): Promise<string>;
    verifyJWT(jwt: string): boolean;
    decodeJWT(jwt);
}
