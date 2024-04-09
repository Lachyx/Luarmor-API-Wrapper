import axios from "axios";

export async function searchUsers(
    key: string,
    project_id: string,
    discord_id?: string,
    user_key?: string,
    identifier?: string,
    from?: number,
    until?: number,
    search?: string
) {
    const params: any = {};
    if (discord_id) params.discord_id = discord_id;
    if (user_key) params.user_key = user_key;
    if (identifier) params.identifier = identifier;
    if (from) params.from = from;
    if (until) params.until = until;
    if (search) params.search = search;
    const response = await axios.get(`https://api.luarmor.net/v3/projects/${project_id}/users`, {
        headers: {
            Authorization: key
        },
        params: params 
    });
    return response.data;
}
