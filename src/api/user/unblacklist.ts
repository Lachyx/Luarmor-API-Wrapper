import axios from "axios";

export async function unblacklist(key: string, project_id: string, unban_token: string){
    const response = await axios.post(`https://api.luarmor.net/v3/projects/${project_id}/users/unban`, { unban_token }, { headers: { Authorization: key}})
    return response.data;
}