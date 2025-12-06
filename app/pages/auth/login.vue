<template>
  <div>
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
        <p class="text-gray-500 dark:text-gray-400">Sign in to your account</p>
      </div>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="you@example.com" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" />
        </UFormGroup>

        <div class="flex items-center justify-between">
            <UCheckbox v-model="state.remember" label="Remember me" />
            <NuxtLink to="/auth/forgot-password" class="text-sm text-primary-600 hover:text-primary-500">
                Forgot password?
            </NuxtLink>
        </div>

        <UButton type="submit" block :loading="loading" color="primary" variant="solid">
          Sign in
        </UButton>
      </UForm>

      <div class="mt-6 text-center text-sm">
        <p class="text-gray-500">
            Don't have an account? 
            <NuxtLink to="/auth/register" class="font-medium text-primary-600 hover:text-primary-500">
                Sign up
            </NuxtLink>
        </p>
      </div>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'auth'
})

const { login } = useAuth()
const loading = ref(false)

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

const state = reactive({
  email: '',
  password: '',
  remember: false
})

async function onSubmit(event: FormSubmitEvent<any>) {
    loading.value = true
    try {
        await login(event.data.email, event.data.password)
        // Redirect handled in useAuth or middleware
    } catch (error) {
        // Handle error (toast)
        console.error(error)
         useToast().add({
            title: 'Login failed',
            description: 'Invalid credentials or server error',
            color: 'red'
        })
    } finally {
        loading.value = false
    }
}
</script>
