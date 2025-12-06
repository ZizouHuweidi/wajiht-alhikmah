<template>
  <div>
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Reset Password</h2>
        <p class="text-gray-500 dark:text-gray-400">Enter your email to receive instructions</p>
      </div>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="you@example.com" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UButton type="submit" block :loading="loading" color="primary" variant="solid">
          Send Reset Link
        </UButton>
      </UForm>

      <div class="mt-6 text-center text-sm">
        <NuxtLink to="/auth/login" class="font-medium text-primary-600 hover:text-primary-500">
            Back to Sign in
        </NuxtLink>
      </div>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'auth'
})

const loading = ref(false)

const schema = z.object({
  email: z.string().email('Invalid email')
})

const state = reactive({
  email: ''
})

async function onSubmit(event: FormSubmitEvent<any>) {
    loading.value = true
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    loading.value = false
    
    useToast().add({
        title: 'Check your email',
        description: 'If an account exists, we sent a reset link.',
        color: 'green'
    })
}
</script>
