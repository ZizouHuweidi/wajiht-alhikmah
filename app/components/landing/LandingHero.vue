<template>
  <div class="relative overflow-hidden bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
    <!-- Gradient Background Effect -->
    <div class="absolute inset-0 z-0">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/10 blur-3xl"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/10 blur-3xl"></div>
    </div>

    <UContainer class="relative z-10 text-center">
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
        Organize, Track, and Engage with <br />
        <span class="text-primary-600 dark:text-primary-400">Human Knowledge</span>
      </h1>
      
      <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
        Reimagining the House of Wisdom for the 21st century. 
        A unified platform for your books, papers, podcasts, and notes.
      </p>

      <div class="mt-10 flex justify-center gap-4">
        <UButton to="/auth/register" size="xl" color="primary" variant="solid" icon="i-heroicons-user-plus">
          Join the Library
        </UButton>
        <UButton to="#features" size="xl" color="gray" variant="ghost" icon="i-heroicons-arrow-down">
          Explore Features
        </UButton>
      </div>
    </UContainer>
  </div>
</template>
