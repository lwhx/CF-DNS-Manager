export async function onRequestGet(context) {
    const { env } = context;

    const hasPassword = !!env.APP_PASSWORD && env.APP_PASSWORD.length > 0;
    const hasGithubID = !!env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_ID.length > 0;
    const hasGithubSecret = !!env.GITHUB_CLIENT_SECRET && env.GITHUB_CLIENT_SECRET.length > 0;
    const githubMode = hasGithubID && hasGithubSecret;

    return new Response(JSON.stringify({
        passwordMode: hasPassword,
        githubMode: githubMode
    }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
