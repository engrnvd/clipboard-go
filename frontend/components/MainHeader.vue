<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { env } from '@/env'
import { useItemsStore } from '@/store/useItemsStore'

const items = useItemsStore()
</script>

<template>
    <div class="px-4 py-1 bg-primary text-background flex items-center select-none cursor-default">
        <h1 class="text-xl flex-grow">{{ env.appName }}</h1>
        <Button :disabled="!items.data.length" variant="ghost" @click="items.clear">Clear All</Button>
    </div>
</template>
