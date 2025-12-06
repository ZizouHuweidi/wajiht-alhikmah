<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
    <div class="w-full max-w-md">
        <div class="text-center mb-8">
            <NuxtLink to="/" class="inline-flex items-center gap-2 group">
                 <UIcon name="i-heroicons-book-open" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
                 <span class="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">Bayt al Hikmah</span>
            </NuxtLink>
        </div>
        
        <UCard class="w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 ring-1 ring-gray-200 dark:ring-gray-800 shadow-xl">
             <slot />
        </UCard>

        <div class="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
            <NuxtLink to="/" class="hover:text-primary-500">Back to Home</NuxtLink>
        </div>
    </div>
  </div>
</template>
