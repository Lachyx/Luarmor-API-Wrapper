import axios from "axios";
export async function deleteKey(key: string, project_id: string, user_key: string) {
   const response = await axios.delete(` https://api.luarmor.net/v3/projects/${project_id}/users?user_key=${user_key}`, { headers: { Authorization: key }})
    return response.data;
}