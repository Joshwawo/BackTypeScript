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
exports.deleteCar = exports.updateCar = exports.getById = exports.getItemsCars = exports.insertItem = void 0;
const items_1 = __importDefault(require("../models/items"));
const insertItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const RespuestaInsert = yield items_1.default.create(item);
    return RespuestaInsert;
});
exports.insertItem = insertItem;
const getItemsCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const respuestaItems = yield items_1.default.find({});
    return respuestaItems;
});
exports.getItemsCars = getItemsCars;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const respuestaItem = yield items_1.default.findOne({ _id: id });
    return respuestaItem;
});
exports.getById = getById;
const updateCar = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const respuesta = yield items_1.default.findByIdAndUpdate({ _id: id }, data, {
        new: true,
    });
    return respuesta;
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const respuestaIte = yield items_1.default.remove({ _id: id });
    return respuestaIte;
});
exports.deleteCar = deleteCar;
