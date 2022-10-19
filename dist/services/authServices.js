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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerNewUser = void 0;
const auth_1 = __importDefault(require("../models/auth"));
const bcrypt_hanle_1 = require("../utils/bcrypt.hanle");
const jwt_hanle_1 = require("../utils/jwt.hanle");
const registerNewUser = ({ email, password, name }) => __awaiter(void 0, void 0, void 0, function* () {
    const exist = yield auth_1.default.findOne({ email });
    if (exist)
        return "Ya_existe_el_usuario";
    const pwdHash = yield (0, bcrypt_hanle_1.encrypt)(password);
    const registerNewUser = yield auth_1.default.create({ email, password: pwdHash, name });
    return registerNewUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const exist = yield auth_1.default.findOne({ email });
    if (!exist)
        return "No existe el usuario";
    const passwordHash = exist.password;
    const isCorrect = yield (0, bcrypt_hanle_1.verified)(password, passwordHash);
    if (!isCorrect)
        return "Contraseña_incorrecta";
    const token = yield (0, jwt_hanle_1.generateToken)(exist.email);
    const data = {
        token,
        user: exist
    };
    return data;
});
exports.loginUser = loginUser;
