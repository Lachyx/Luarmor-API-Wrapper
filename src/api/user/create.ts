import axios from "axios";
export async function createKey(key: string, project_id: string, identifier?: string, auth_expire?: number, note?: string, discord_id?: string,key_days?: number ) {
    const response = await axios.post(`https://api.luarmor.net/v3/projects/${project_id}/users`,{identifier,auth_expire,note,discord_id,key_days},{ headers: { Authorization: key }});
    return response.data; 
}