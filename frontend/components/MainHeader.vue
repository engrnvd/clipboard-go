<script setup lang="ts">
import { Button } from '@/components/ui/button'
import WindowSizeMenu from '@/components/WindowSizeMenu.vue'
import { env } from '@/env'
import { useItemsStore } from '@/store/useItemsStore'

const items = useItemsStore()
</script>

<template>
    <div class="px-4 py-1 bg-primary border-b text-background flex items-center space-x-2 select-none cursor-default">
        <WindowSizeMenu/>
        <h1 class="flex-grow text-center">{{ env.appName }}</h1>
        <Button size="sm" :disabled="!items.data.length" variant="ghost" @click="items.clear">Clear All</Button>
    </div>
</template>
