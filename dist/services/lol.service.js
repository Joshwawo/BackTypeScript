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
exports.fetchSummoner = exports.fetchAllChamps = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchAllChamps = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json";
    const respuesta = yield axios_1.default.get(url);
    return respuesta.data;
});
exports.fetchAllChamps = fetchAllChamps;
const fetchSummoner = (summonerName) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
    const respuesta = yield axios_1.default.get(url, {
        headers: {
            "X-Riot-Token": "RGAPI-543a23aa-b2fd-45fd-88a1-47e90895673f",
        },
    });
    return respuesta.data;
});
exports.fetchSummoner = fetchSummoner;
