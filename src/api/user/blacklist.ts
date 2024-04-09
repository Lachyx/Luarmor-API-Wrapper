import axios from "axios";

export async function blacklist(key: string, project_id: string, user_key: string, ban_reason?: string, ban_expire?: number){
    const response = await axios.post(`https://api.luarmor.net/v3/projects/${project_id}/users/blacklist`, { user_key, ban_reason, ban_expire}, { headers: { Authorization: key}})
    return response.data;
}