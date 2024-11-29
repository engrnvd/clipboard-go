<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { env } from '@/env'
import { useItemsStore } from '@/store/useItemsStore'

const items = useItemsStore()
</script>

<template>
    <div class="px-4 py-2 bg-primary text-background flex items-center">
        <h1 class="text-2xl flex-grow">{{ env.appName }}</h1>
        <Button :disabled="!items.data.length" variant="ghost" @click="items.clear">Clear All</Button>
    </div>
</template>
