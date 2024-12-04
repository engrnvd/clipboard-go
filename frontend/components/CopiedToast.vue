<script setup lang="ts">
import { cn } from '@/lib/utils'
import { copiedToast } from '@/store/flags'
import { useAppStore } from '@/store/useAppStore'
import { computed } from 'vue'

const app = useAppStore()
const classes = computed(() => app.view === 'circle' ?
    'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'
    : 'right-4 bottom-4')
</script>

<template>
    <Transition name="fade">
        <div v-if="copiedToast.flag.value"
             :class="cn('fixed text-[10px] p-1 rounded-md opacity-75 shadow bg-foreground text-background', classes)">
            Copied
        </div>
    </Transition>
</template>
