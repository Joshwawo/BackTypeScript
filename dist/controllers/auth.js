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
exports.testing = exports.LoginController = exports.registerController = void 0;
const authServices_1 = require("../services/authServices");
const item_1 = require("../services/item");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const respuestaUser = yield (0, authServices_1.registerNewUser)(body);
    if (respuestaUser === "Ya_existe_el_usuario") {
        res.status(403);
        res.send(respuestaUser);
    }
    else {
        res.send(respuestaUser);
    }
    // res.send(respuestaUser);
});
exports.registerController = registerController;
const LoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { email, password } = body;
    const respuestaUser = yield (0, authServices_1.loginUser)({ email, password });
    // res.send(respuestaUser);
    if (respuestaUser === "Contraseña_incorrecta") {
        res.status(403);
        res.send(respuestaUser);
    }
    else {
        res.send(respuestaUser);
    }
});
exports.LoginController = LoginController;
const testing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield (0, item_1.getItemsCars)();
        res.send(respuesta);
    }
    catch (error) {
        console.log(error);
    }
});
exports.testing = testing;
