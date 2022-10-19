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
const jsonwebtoken_1 = require("jsonwebtoken");
const NewUser_1 = __importDefault(require("../models/NewUser"));
const checkAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = (0, jsonwebtoken_1.verify)(token, String(process.env.JWT_SECRET));
            req.user = yield NewUser_1.default.findById({
                _id: decoded.id,
            }).select("-password, -confirmado, -token -__v -createdAt -updatedAt");
            return next();
        }
        catch (error) {
            return res.status(401).json({ message: "we have a error" });
        }
    }
    if (!token) {
        const error = new Error("No token, authorization denied");
        return res.status(401).json({ message: error.message });
    }
    next();
});
exports.default = checkAuth;
