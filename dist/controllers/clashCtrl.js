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
exports.getClan = exports.getUpcomingchest = exports.getPlayerTag = exports.getCards = void 0;
const clash_service_1 = require("../services/clash.service");
const getCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const respuesta = yield (0, clash_service_1.fetchCards)();
    res.send(respuesta);
});
exports.getCards = getCards;
const getPlayerTag = ({ query }, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userHashTag = (_a = query.userHashTag) === null || _a === void 0 ? void 0 : _a.toString().replace("#", "%23");
        console.log(userHashTag);
        // const userHashTag = "#UJJR8PUCG".toUpperCase().replace("#", "%23");
        const respuesta = yield (0, clash_service_1.fetchPlayer)(String(userHashTag));
        res.send(respuesta);
    }
    catch (error) {
        console.log(error);
        res.send({
            status: {
                message: "Player not found",
                status_code: 404,
            },
            error: {
                error: error,
            },
        });
    }
});
exports.getPlayerTag = getPlayerTag;
const getUpcomingchest = ({ query }, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        // res.send({message:" Hola desde aki"})
        // const userHashTag = "#UJJR8PUCG".toUpperCase().replace("#", "%23");
        const userHashTag = (_b = query.userHashTag) === null || _b === void 0 ? void 0 : _b.toString().replace("#", "%23");
        // console.log(userHashTag)
        const respuesta = yield (0, clash_service_1.fetchUpcomingchests)(String(userHashTag));
        res.send(respuesta);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
exports.getUpcomingchest = getUpcomingchest;
const getClan = ({ query }, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const clanHashTag = (_c = query.clanHashTag) === null || _c === void 0 ? void 0 : _c.toString().replace("#", "%23");
        // res.send({message:"Hola desde getClan"})
        // const clanHashTag = "#LRJ0GLV2".toUpperCase().replace("#","%23")
        const respuesta = yield (0, clash_service_1.fetchClan)(String(clanHashTag));
        res.status(200).send(respuesta);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getClan = getClan;
