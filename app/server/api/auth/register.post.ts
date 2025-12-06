export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500))

    if (body.email === 'exists@example.com') {
        throw createError({
            statusCode: 409,
            statusMessage: 'Email already registered'
        })
    }

    return {
        token: 'mock-jwt-token-' + Date.now(),
        user: {
            id: 2,
            email: body.email,
            name: body.name || 'New User',
            avatar: null
        }
    }
})
