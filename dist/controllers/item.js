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
exports.deleteItems = exports.updateItems = exports.getItems = exports.posttItems = exports.getItem = void 0;
const item_1 = require("../services/item");
const error_handle_1 = require("../utils/error.handle");
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // res.json({ message: "Holas" });
        const { id } = req.params;
        const respuesta = yield (0, item_1.getById)(id);
        const data = respuesta ? respuesta : "NOT_FOUND";
        res.send(data);
    }
    catch (error) {
        res.status(500);
        res.send("Error_Get_Items");
    }
});
exports.getItem = getItem;
//Puedo quitar este body y volver a poner el req, es para files didactos esta desescruturacion
const posttItems = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuestaItem = yield (0, item_1.insertItem)(body);
        res.send(respuestaItem);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Error_Post_Items", error);
    }
});
exports.posttItems = posttItems;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const respuesta = await getItemsCars();
        // res.send(respuesta);
        res.send({ message: "Hola desde aqui" });
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Error_Get_Items");
    }
});
exports.getItems = getItems;
const updateItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const respuestaItems = yield (0, item_1.updateCar)(id, body);
        console.log(respuestaItems);
        res.send(respuestaItems);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Error_Update_Items");
    }
});
exports.updateItems = updateItems;
const deleteItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const respuestaItems = yield (0, item_1.deleteCar)(id);
        // console.log(respuestaItems);
        res.send(respuestaItems);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Error_Delete_Items");
    }
});
exports.deleteItems = deleteItems;
