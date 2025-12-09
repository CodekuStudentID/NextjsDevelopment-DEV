const URL_API_USERS = '/api/users';

export async function Index () {
    const res = await fetch(URL_API_USERS);
    const data = await res.json();
    return data;
}
