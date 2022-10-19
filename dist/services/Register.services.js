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
exports.newPasswordService = exports.compareTokenService = exports.forgotPasswordService = exports.confirmAccount = exports.authService = exports.registerNewUserService = void 0;
const NewUser_1 = __importDefault(require("../models/NewUser"));
const randomId_1 = __importDefault(require("../utils/randomId"));
const generateJWT_1 = __importDefault(require("../utils/generateJWT"));
const registerNewUserService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = body;
        const alreadyExist = yield NewUser_1.default.findOne({ email });
        //Comprobar si el usuario existe y retornar un error para el controlador
        if (alreadyExist) {
            const error = new Error("User already exist");
            return error;
        }
        const newUser = new NewUser_1.default(body);
        newUser.token = (0, randomId_1.default)();
        const newUserSave = yield newUser.save();
        return newUserSave;
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerNewUserService = registerNewUserService;
const authService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = body;
    //Comprobar si el usuario existe
    const user = yield NewUser_1.default.findOne({ email });
    if (!user) {
        const error = new Error("User does not exist");
        return error;
    }
    //Comprobar si el usuario esta comprobado
    if (!user.confirmado) {
        const error = new Error("User not confirmed");
        return error;
    }
    //Comprobar si el password es correcto
    if (yield user.comprobarPassword(password)) {
        const token = {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: (0, generateJWT_1.default)(user._id),
        };
        return token;
    }
    else {
        const error = new Error("Incorrect password");
        return error;
    }
});
exports.authService = authService;
const confirmAccount = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const confirmUser = yield NewUser_1.default.findOne({ token });
    if (!confirmUser) {
        const error = new Error("invalid token");
        return error;
    }
    try {
        confirmUser.confirmado = true;
        confirmUser.token = "";
        yield confirmUser.save();
        return true;
    }
    catch (error) {
        console.log(error);
    }
});
exports.confirmAccount = confirmAccount;
const forgotPasswordService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield NewUser_1.default.findOne({ email });
    if (!user) {
        const error = new Error("User does not exist");
        return error;
    }
    try {
        user.token = (0, randomId_1.default)();
        yield user.save();
        return true;
    }
    catch (error) {
        console.log(error);
    }
});
exports.forgotPasswordService = forgotPasswordService;
const compareTokenService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield NewUser_1.default.findOne({ token });
    if (!user) {
        const error = new Error("invalid token");
        return error;
    }
    return true;
});
exports.compareTokenService = compareTokenService;
const newPasswordService = (token, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield NewUser_1.default.findOne({ token });
    if (!user) {
        const error = new Error("invalid token");
        return error;
    }
    try {
        user.token = "";
        user.password = password;
        yield user.save();
        return true;
    }
    catch (error) {
        console.log(error);
    }
});
exports.newPasswordService = newPasswordService;
