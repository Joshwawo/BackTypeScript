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
exports.getSummoner = exports.getChamps = void 0;
const lol_service_1 = require("../services/lol.service");
const getChamps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield (0, lol_service_1.fetchAllChamps)();
        res.send(respuesta);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getChamps = getChamps;
// export const getUser = async (req, res) => {
//   // const userHashtag = "#QPYJPJ20".toUpperCase().replace("#", "%23");
//   const userHashtag = req.query.userHashtag;
//   const userbyId = await fetchDataByID(userHashtag);
//     console.log(userbyId);
//     console.log('userbyId ruta clash/user');
//   res.json(userbyId);
// };
const getSummoner = ({ query }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const {} = req.params
        //*/ *= %25
        //*/ < = %3C
        //*/ > = %3E
        //*/ # = %23
        //*/ % = %25
        //*/ : = %3A
        //*/ " = %22
        //*/ space = %20
        let expression = ["*", "<", ">", "#", "%", ":", '"', " "];
        let replace = ["%2A", "%3C", "%3E", "%23", "%25", "%3A", "%22", "%20"];
        let summonerName = query.summonerName;
        for (let i = 0; i < expression.length; i++) {
            summonerName = summonerName === null || summonerName === void 0 ? void 0 : summonerName.toString().replace(expression[i], replace[i]);
        }
        // console.log(summonerName);
        // const
        // const respuesta = await fetchSummoner(`${summonerName}`);
        const respuesta = yield (0, lol_service_1.fetchSummoner)(String(summonerName));
        res.send(respuesta);
    }
    catch (error) {
        console.log(error);
        res.status(404);
        res.send({
            status: {
                message: "Summoner not found",
                status_code: 404,
            },
            error: {
                error: error,
            },
        });
    }
});
exports.getSummoner = getSummoner;
