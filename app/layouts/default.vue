<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <!-- Navbar -->
    <header class="border-b border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/75 backdrop-blur-md sticky top-0 z-50">
      <UContainer class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="bg-primary-500/10 p-2 rounded-lg group-hover:bg-primary-500/20 transition-colors">
            <!-- Simple customized icon or placeholder for now -->
            <UIcon name="i-heroicons-book-open" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <span class="font-bold text-xl tracking-tight">Bayt al Hikmah</span>
        </NuxtLink>

        <!-- Navigation Links (Desktop) -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <NuxtLink to="/explore" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Explore</NuxtLink>
          <NuxtLink to="/community" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Community</NuxtLink>
          <NuxtLink to="/about" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</NuxtLink>
        </nav>

        <!-- Auth Actions -->
        <div class="flex items-center gap-3">
            <template v-if="user">
                <UButton to="/dashboard" color="gray" variant="ghost">Dashboard</UButton>
                <UButton color="black" variant="solid" @click="logout">Log Out</UButton>
            </template>
            <template v-else>
                 <UButton to="/auth/login" color="gray" variant="ghost">Log In</UButton>
                 <UButton to="/auth/register" color="primary" variant="solid">Join Library</UButton>
            </template>
          
          <!-- Color Mode Toggle (Optional, can be added later) -->
        </div>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
                <h3 class="font-bold text-lg mb-4">Bayt al Hikmah</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                    Reimagining the House of Wisdom for the digital age. Organize, engage, and discover knowledge across all media.
                </p>
            </div>
             <div>
                <h4 class="font-semibold mb-3">Platform</h4>
                <ul class="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><NuxtLink to="/explore" class="hover:text-primary-500">Explore</NuxtLink></li>
                    <li><NuxtLink to="/pricing" class="hover:text-primary-500">Membership</NuxtLink></li>
                    <li><NuxtLink to="/roadmap" class="hover:text-primary-500">Roadmap</NuxtLink></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold mb-3">Community</h4>
                 <ul class="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><a href="#" class="hover:text-primary-500">Discord</a></li>
                    <li><a href="#" class="hover:text-primary-500">Twitter</a></li>
                    <li><a href="#" class="hover:text-primary-500">GitHub</a></li>
                </ul>
            </div>
        </div>
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
            &copy; {{ new Date().getFullYear() }} Bayt al Hikmah. All rights reserved.
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { user, logout } = useAuth()
</script>
