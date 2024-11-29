<script setup lang="ts">
import { env } from '../env'
</script>

<template>
    <div class="px-4 py-2 bg-primary text-background">
        <h1>{{ env.appName }}</h1>
    </div>
</template>
