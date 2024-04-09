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
exports.searchUsers = void 0;
const axios_1 = __importDefault(require("axios"));
function searchUsers(key, project_id, discord_id, user_key, identifier, from, until, search) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {};
        if (discord_id)
            params.discord_id = discord_id;
        if (user_key)
            params.user_key = user_key;
        if (identifier)
            params.identifier = identifier;
        if (from)
            params.from = from;
        if (until)
            params.until = until;
        if (search)
            params.search = search;
        const response = yield axios_1.default.get(`https://api.luarmor.net/v3/projects/${project_id}/users`, {
            headers: {
                Authorization: key
            },
            params: params
        });
        return response.data;
    });
}
exports.searchUsers = searchUsers;
