<template>
  <div id="features" class="py-24 bg-white dark:bg-gray-900">
    <UContainer>
      <div class="text-center mb-16">
        <h2 class="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">Features</h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white leading-8">
          A Complete Knowledge Operating System
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard v-for="feature in features" :key="feature.title" class="group hover:ring-2 hover:ring-primary-500/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary-900/10">
          <template #header>
             <div class="flex items-center gap-3">
                <div class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-500/10 text-primary-600 dark:text-primary-400 transition-colors">
                    <UIcon :name="feature.icon" class="w-6 h-6" />
                </div>
                <h3 class="font-bold text-lg text-gray-900 dark:text-white">{{ feature.title }}</h3>
             </div>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            {{ feature.description }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Multi-Format Sources',
    description: 'Track books, academic papers, podcasts, videos, and articles in one unified library.',
    icon: 'i-heroicons-queue-list'
  },
  {
    title: 'Contextual Notes',
    description: 'Create structured annotations tied to specific timestamps in audio or pages in books.',
    icon: 'i-heroicons-pencil-square'
  },
  {
    title: 'Knowledge Graph',
    description: 'Connect your notes with tags, topics, and concepts to build a personal knowledge graph.',
    icon: 'i-heroicons-share'
  },
  {
    title: 'Reading Timeline',
    description: 'Visualize your intellectual journey with a history of what you have read and learned over time.',
    icon: 'i-heroicons-clock'
  },
  {
    title: 'Collections & Lists',
    description: 'Curate public or private lists by theme, such as "Islamic Philosophy" or "2025 Reading Goals".',
    icon: 'i-heroicons-folder-open'
  },
  {
    title: 'Discovery Engine',
    description: 'Get AI-powered recommendations based on your unique reading history and interests.',
    icon: 'i-heroicons-sparkles'
  },
  {
    title: 'Ratings & Reviews',
    description: 'Rate sources and write reviews to help others discover quality content.',
    icon: 'i-heroicons-star'
  },
  {
    title: 'Integrations',
    description: 'Sync with Obsidian, import from Zotero, and save capturing from the web.',
    icon: 'i-heroicons-arrows-right-left'
  },
  {
    title: 'Privacy First',
    description: 'Your library is private by default. Share only what you want, when you want.',
    icon: 'i-heroicons-lock-closed'
  }
]
</script>
