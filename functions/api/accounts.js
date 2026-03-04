export async function onRequestGet(context) {
    const { env } = context;

    const accounts = [];
    if (env.CF_API_TOKEN) accounts.push({ id: 0, name: 'Default Account' });

    Object.keys(env).forEach(key => {
        const match = key.match(/^CF_API_TOKEN(\d+)$/);
        if (match) {
            accounts.push({ id: parseInt(match[1], 10), name: `Account ${match[1]}` });
        }
    });

    accounts.sort((a, b) => a.id - b.id);

    return new Response(JSON.stringify({ accounts }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
