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
exports.fetchClan = exports.fetchUpcomingchests = exports.fetchPlayer = exports.fetchCards = void 0;
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
const fetchCards = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = "https://proxy.royaleapi.dev/v1/cards";
        const respuesta = yield axios_1.default.get(url, {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${process.env.API_CLASH}`,
                Accept: "application/json ; charset=utf-8",
            },
        });
        return respuesta.data;
    }
    catch (error) {
        console.log(error);
    }
});
exports.fetchCards = fetchCards;
const fetchPlayer = (userHashTag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://proxy.royaleapi.dev/v1/players/${userHashTag}`;
        const respuesta = yield axios_1.default.get(url, {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${process.env.API_CLASH}`,
            },
        });
        return respuesta.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.fetchPlayer = fetchPlayer;
const fetchUpcomingchests = (userHashTag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://proxy.royaleapi.dev/v1/players/${userHashTag}/upcomingchests`;
        const respuesta = yield axios_1.default.get(url, {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${process.env.API_CLASH}`,
            },
        });
        return respuesta.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.fetchUpcomingchests = fetchUpcomingchests;
const fetchClan = (clanHashTag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://proxy.royaleapi.dev/v1/clans/${clanHashTag}`;
        const respuesta = yield axios_1.default.get(url, {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${process.env.API_CLASH}`,
            },
        });
        return respuesta.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.fetchClan = fetchClan;
