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
exports.getItems = void 0;
const error_handle_1 = require("../utils/error.handle");
// interface RequestExt extends Request {
//   user?: string | JwtPayload
// }
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user2 = yield req.user;
        res.send({
            data: "Esto solo lo ves si estas auth",
            user: user2,
        });
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Error_GET_BLOGS");
    }
});
exports.getItems = getItems;
