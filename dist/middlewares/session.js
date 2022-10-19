"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_hanle_1 = require("../utils/jwt.hanle");
//TODO:Cambiar esto a una Interface
// interface RequestExt extends Request {
//   user?: string | JwtPayload;
// }
const checkJwt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop(); //['Bearer, "token"]
        const isUser = (0, jwt_hanle_1.verifyToken)(`${jwt}`);
        console.log(isUser);
        if (!isUser) {
            res.status(401);
            res.send("No tienes un jwt valido");
        }
        else {
            req.user = isUser;
            console.log({ jwtByUser });
            next();
        }
        // console.log(isOk)
    }
    catch (error) {
        console.log(error);
        res.status(400);
        res.send("Session no valida");
    }
});
exports.checkJwt = checkJwt;
