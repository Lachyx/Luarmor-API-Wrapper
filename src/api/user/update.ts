import axios from "axios";

export async function updateKey(key: string, project_id: string,user_key: string,identifier?: string, auth_expire?: number, note?: string, discord_id?: string) {
    axios.patch(`https://api.luarmor.net/v3/projects/${project_id}/users`, { identifier,auth_expire,note,discord_id,user_key}, { headers: {'Authorization': key}})
}