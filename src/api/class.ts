import { APIDetails } from "./details/details";
import { APIStats } from "./stats/stats";
import { APIStatus } from "./status/status";
import { blacklist } from "./user/blacklist";
import { createKey } from "./user/create";
import { deleteKey } from "./user/delete";
import { LinkDiscordToKey } from "./user/link";
import { ResetUserHWID } from "./user/reset";
import { searchUsers } from "./user/search";
import { unblacklist } from "./user/unblacklist";
import { updateKey } from "./user/update";

export class Luarmor {
    key: string;
    project_id: string;
    constructor(key: string, project_id: string) {
        this.key = key;
        this.project_id = project_id;
    }

    async Status() {
        return APIStatus()
    }

    async Details() {
        return APIDetails(this.key)
    }

    async Stats(noUsers: boolean) {
        return APIStats(this.key, noUsers)
    }

    async CreateUser(identifier?: string, auth_expire?: number, note?: string, discord_id?: string, key_days?: number) {
        return createKey(this.key,this.project_id,identifier,auth_expire,note,discord_id,key_days)
    }

    async UpdateUser(user_key: string,identifier?: string, auth_expire?: number, note?: string, discord_id?: string) {
       return updateKey(this.key,this.project_id,user_key,identifier,auth_expire,note,discord_id)
    }

    async DeleteUser(user_key: string) {
        return deleteKey(this.key,this.project_id,user_key)
    }

    async Users(discord_id?: string, user_key?: string, identifier?: string, from?: number, until?: number, search?: string) {
      return searchUsers(this.key, this.project_id, )
    }

    async ResetHWID(user_key: string, force?: boolean) {
        return ResetUserHWID(this.key, this.project_id, user_key, force)
    }

    async LinkDiscordToKey(user_key: string, discord_id: string, force?: boolean) {
        return LinkDiscordToKey(this.key, this.project_id, user_key, discord_id, force)
    }

    async BlacklistKey(user_key: string, ban_reason?: string, ban_expire?: number) {
        return blacklist(this.key, this.project_id, user_key, ban_reason, ban_expire)
    }

    async UnblacklistKey(unban_token: string) {
        return unblacklist(this.key, this.project_id, unban_token)
    }
}