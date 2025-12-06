<template>
  <UContainer class="py-10">
    <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
    <UCard>
        <template #header>
            <div class="flex items-center gap-4">
                <UAvatar :src="user?.avatar" :alt="user?.name" size="lg" />
                <div>
                    <h2 class="text-xl font-semibold">Welcome, {{ user?.name }}</h2>
                    <p class="text-sm text-gray-500">{{ user?.email }}</p>
                </div>
            </div>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
            This is your private library dashboard. From here you can manage your books, notes, and profile.
        </p>
        <div class="mt-6">
            <UButton color="gray" variant="soft" icon="i-heroicons-plus">Add knowledge source</UButton>
        </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})

const { user } = useAuth()
</script>
