interface AuthResponse {
    token: string;
    user: any;
}

export const useAuth = () => {
    const user = useState<any>('user', () => null)
    const token = useState<string | null>('token', () => null)
    const router = useRouter()

    const login = async (email: string, password: string) => {
        try {
            const data = await $fetch<AuthResponse>('/api/auth/login', {
                method: 'POST',
                body: { email, password }
            })

            token.value = data.token
            user.value = data.user

            if (token.value) {
                await navigateTo('/dashboard') // Or protected home
            }
            return true
        } catch (e) {
            console.error('Login error', e)
            throw e
        }
    }

    const register = async (name: string, email: string, password: string) => {
        try {
            const data = await $fetch<AuthResponse>('/api/auth/register', {
                method: 'POST',
                body: { name, email, password }
            })

            token.value = data.token
            user.value = data.user

            if (token.value) {
                await navigateTo('/dashboard')
            }
            return true
        } catch (e) {
            console.error('Register error', e)
            throw e
        }
    }

    const logout = async () => {
        user.value = null
        token.value = null
        // Optional: Call logout API
        await navigateTo('/auth/login')
    }

    return {
        user,
        token,
        login,
        register,
        logout
    }
}
