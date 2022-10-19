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
exports.userPerfil = exports.newPassword = exports.comparePassword = exports.forgotPassword = exports.confirmAccountC = exports.authUserR = exports.registerNewUser = exports.register = void 0;
const Register_services_1 = require("../services/Register.services");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: "Hola desde aqui" });
});
exports.register = register;
const registerNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Register_services_1.registerNewUserService)(req.body);
        if (response instanceof Error) {
            return res.status(400).json({ message: response.message });
        }
        res.json(response);
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerNewUser = registerNewUser;
const authUserR = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Register_services_1.authService)(req.body);
        if (response instanceof Error) {
            return res
                .status(response.message === "User does not exist" ? 404 : 400)
                .json({ message: response.message });
        }
        console.log(response);
        res.json(response);
    }
    catch (error) {
        console.log(error);
    }
});
exports.authUserR = authUserR;
const confirmAccountC = ({ params: { token } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Register_services_1.confirmAccount)(token);
        if (response instanceof Error) {
            return res.status(400).json({ message: response.message });
        }
        if (response) {
            res.json({ message: "Account confirmed" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.confirmAccountC = confirmAccountC;
const forgotPassword = ({ body: { email } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Register_services_1.forgotPasswordService)(email);
        if (response instanceof Error) {
            return res.status(400).json({ message: response.message });
        }
        if (response) {
            res.json({ message: "Email sent" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.forgotPassword = forgotPassword;
const comparePassword = ({ params: { token } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Register_services_1.compareTokenService)(token);
        if (response instanceof Error) {
            return res.status(400).json({ message: response.message });
        }
        if (response) {
            res.json({ message: "Token valid and user exist" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.comparePassword = comparePassword;
const newPassword = ({ params: { token }, body: { password } }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Register_services_1.newPasswordService)(token, password);
        if (response instanceof Error) {
            return res.status(400).json({ message: response.message });
        }
        if (response) {
            res.json({ message: "Password updated" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.newPassword = newPassword;
const userPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({ message: "Hola desde aqui", user: req.user });
        // res.json({message:"Hola desde aqui"})
    }
    catch (error) {
        console.log(error);
    }
});
exports.userPerfil = userPerfil;
