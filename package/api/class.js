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
exports.Luarmor = void 0;
const details_1 = require("./details/details");
const stats_1 = require("./stats/stats");
const status_1 = require("./status/status");
const blacklist_1 = require("./user/blacklist");
const create_1 = require("./user/create");
const delete_1 = require("./user/delete");
const link_1 = require("./user/link");
const reset_1 = require("./user/reset");
const search_1 = require("./user/search");
const unblacklist_1 = require("./user/unblacklist");
const update_1 = require("./user/update");
class Luarmor {
    constructor(key, project_id) {
        this.key = key;
        this.project_id = project_id;
    }
    Status() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, status_1.APIStatus)();
        });
    }
    Details() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, details_1.APIDetails)(this.key);
        });
    }
    Stats(noUsers) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, stats_1.APIStats)(this.key, noUsers);
        });
    }
    CreateUser(identifier, auth_expire, note, discord_id, key_days) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, create_1.createKey)(this.key, this.project_id, identifier, auth_expire, note, discord_id, key_days);
        });
    }
    UpdateUser(user_key, identifier, auth_expire, note, discord_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, update_1.updateKey)(this.key, this.project_id, user_key, identifier, auth_expire, note, discord_id);
        });
    }
    DeleteUser(user_key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, delete_1.deleteKey)(this.key, this.project_id, user_key);
        });
    }
    Users(discord_id, user_key, identifier, from, until, search) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, search_1.searchUsers)(this.key, this.project_id);
        });
    }
    ResetHWID(user_key, force) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, reset_1.ResetUserHWID)(this.key, this.project_id, user_key, force);
        });
    }
    LinkDiscordToKey(user_key, discord_id, force) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, link_1.LinkDiscordToKey)(this.key, this.project_id, user_key, discord_id, force);
        });
    }
    BlacklistKey(user_key, ban_reason, ban_expire) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, blacklist_1.blacklist)(this.key, this.project_id, user_key, ban_reason, ban_expire);
        });
    }
    UnblacklistKey(unban_token) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, unblacklist_1.unblacklist)(this.key, this.project_id, unban_token);
        });
    }
}
exports.Luarmor = Luarmor;
