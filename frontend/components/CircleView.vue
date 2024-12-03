<script setup lang="ts">
import { useAppStore } from '@/store/useAppStore'

const app = useAppStore()

</script>

<template>
    <div @click="app.setView('full')"
         class="rounded-full all-center bg-primary cursor-pointer">
        <img class="w-48" src="../assets/images/appicon.svg" alt="AppIcon">
    </div>
</template>
