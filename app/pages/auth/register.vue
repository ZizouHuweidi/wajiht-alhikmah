<template>
  <div>
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Join the Library</h2>
        <p class="text-gray-500 dark:text-gray-400">Create your account to start tracking knowledge</p>
      </div>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Full Name" name="name">
          <UInput v-model="state.name" placeholder="John Doe" icon="i-heroicons-user" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="you@example.com" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" />
        </UFormGroup>
        
        <UFormGroup label="Confirm Password" name="passwordConfirm">
          <UInput v-model="state.passwordConfirm" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" />
        </UFormGroup>

        <UButton type="submit" block :loading="loading" color="primary" variant="solid">
          Create Account
        </UButton>
      </UForm>

       <div class="mt-6 text-center text-sm">
        <p class="text-gray-500">
            Already have an account? 
            <NuxtLink to="/auth/login" class="font-medium text-primary-600 hover:text-primary-500">
                Sign in
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

const { register } = useAuth()
const loading = ref(false)

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  passwordConfirm: z.string()
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords don't match",
  path: ["passwordConfirm"],
})

const state = reactive({
  name: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

async function onSubmit(event: FormSubmitEvent<any>) {
    loading.value = true
    try {
        await register(event.data.name, event.data.email, event.data.password)
         useToast().add({
            title: 'Welcome!',
            description: 'Account created successfully.',
            color: 'green'
        })
        // Redirect logic in useAuth
    } catch (error) {
        console.error(error)
        useToast().add({
            title: 'Registration failed',
            description: 'Could not create account.',
            color: 'red'
        })
    } finally {
        loading.value = false
    }
}
</script>
