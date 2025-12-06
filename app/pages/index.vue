<template>
  <div class="min-h-screen">
    <LandingHero />
    <LandingMission />
    <LandingFeatures />
  </div>
</template>

<script setup lang="ts">
import LandingHero from '~/components/landing/LandingHero.vue'
import LandingMission from '~/components/landing/LandingMission.vue'
import LandingFeatures from '~/components/landing/LandingFeatures.vue'

definePageMeta({
  layout: 'default'
})
</script>
