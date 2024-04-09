import axios from "axios";

export async function LinkDiscordToKey(key: string, project_id: string, user_key: string, discord_id: string, force?: boolean) {
    const response = await axios.post(` https://api.luarmor.net/v3/projects/${project_id}/users/linkdiscord`, { user_key, discord_id, force}, { headers: {Authorization: key}})
    return response.data;
}