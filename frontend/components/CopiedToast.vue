<script setup lang="ts">
import { cn } from '@/lib/utils'
import { copiedToast } from '@/store/flags'
import { useAppStore } from '@/store/useAppStore'
import { computed } from 'vue'

const app = useAppStore()
const classes = computed(() => app.view === 'circle' ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : 'right-4 bottom-4')
</script>

<template>
    <div v-auto-animate :class="cn('w-24 h-6 text-xs text-center fixed', classes)">
        <div key="1" v-if="copiedToast.flag.value"
             class="px-2 py-1 rounded-lg opacity-90 shadow bg-foreground text-background">
            Copied
        </div>
    </div>
</template>
