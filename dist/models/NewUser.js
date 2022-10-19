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
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const newUserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: false,
        trim: true,
    },
    password: {
        type: String,
        requiere: false,
        trim: true,
    },
    email: {
        type: String,
        requiere: false,
        trim: true,
        unique: true,
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
newUserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified("password")) {
            next();
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        this.password = yield bcryptjs_1.default.hash(this.password, salt);
    });
});
// newUserSchema.methods.comprobarPassword = async function (passwordFormulario:string) {
//   return await bcrypt.compare(passwordFormulario, this.password);
// }
newUserSchema.methods.comprobarPassword = function (passwordFormulario) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(passwordFormulario, this.password);
    });
};
const NewUser = (0, mongoose_1.model)("NewUser", newUserSchema);
exports.default = NewUser;