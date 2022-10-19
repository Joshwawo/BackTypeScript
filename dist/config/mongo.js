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
exports.dbConnect = void 0;
require("dotenv/config");
const mongoose_1 = require("mongoose");
// const dbConnect = async (): Promise<void> => {
//   const DB_URI = <string>process.env.DB_URI;
//   await connect(DB_URI);
// };
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DB_URI = process.env.DB_URI;
        const db = yield (0, mongoose_1.connect)(DB_URI);
        console.log(`Base de datos conectada: ${db.connection.name}`);
    }
    catch (error) {
        console.log(error);
    }
});
exports.dbConnect = dbConnect;
// export default dbConnect;
