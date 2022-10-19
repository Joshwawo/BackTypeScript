"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JTW_SECRET = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const routes_1 = require("./routes");
const mongo_1 = require("./config/mongo");
const morgan_1 = __importDefault(require("morgan"));
const PORT = process.env.PORT || 3000;
exports.JTW_SECRET = process.env.JTW_SECRET || "HOLAS";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: "./upload",
}));
app.use(routes_1.router);
(0, mongo_1.dbConnect)();
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});
