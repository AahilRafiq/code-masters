export async function getTopics(query: string) {
    return fetch(`/api/problems/topics?query=${query}`, {
        method: 'GET',
    })
}