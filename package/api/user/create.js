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
exports.createKey = void 0;
const axios_1 = __importDefault(require("axios"));
function createKey(key, project_id, identifier, auth_expire, note, discord_id, key_days) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.post(`https://api.luarmor.net/v3/projects/${project_id}/users`, { identifier, auth_expire, note, discord_id, key_days }, { headers: { Authorization: key } });
        return response.data;
    });
}
exports.createKey = createKey;
