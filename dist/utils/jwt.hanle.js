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
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const app_1 = require("../app");
// console.log(process.env.JTW_SECRET);
// const JTW_SECRET = process.env.JTW_SECRET || "estoesunacontraseñasupersecreta";
// const generateToken = async (id: object) => {
//   const jwt = sign({ id }, JTW_SECRET, { expiresIn: "2h" });
//   return jwt;
// };
const generateToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, app_1.JTW_SECRET, { expiresIn: "2h" });
    return jwt;
});
exports.generateToken = generateToken;
const verifyToken = (jwt) => __awaiter(void 0, void 0, void 0, function* () {
    const isOk = (0, jsonwebtoken_1.verify)(jwt, app_1.JTW_SECRET);
    return isOk;
});
exports.verifyToken = verifyToken;
