export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500))

    if (body.email === 'error@example.com') {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid credentials'
        })
    }

    return {
        token: 'mock-jwt-token-' + Date.now(),
        user: {
            id: 1,
            email: body.email,
            name: 'Zizou Huweidi',
            avatar: 'https://avatars.githubusercontent.com/u/1?v=4'
        }
    }
})
