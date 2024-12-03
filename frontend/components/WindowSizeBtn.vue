<script setup lang="ts">
import { AppView } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/store/useAppStore'
import { CircleIcon, MaximizeIcon, MinusIcon } from 'lucide-vue-next'
import { computed } from 'vue'

const p = defineProps<{
    view: AppView,
}>()

const app = useAppStore()

const config = computed<Record<AppView, { icon: any, color: string }>>(() => ({
    circle: { icon: CircleIcon, color: 'bg-blue-400' },
    minimised: { icon: MinusIcon, color: 'bg-orange-400' },
    full: { icon: MaximizeIcon, color: 'bg-green-400' },
}))
</script>

<template>
    <button
        :class="cn('all-center rounded-full size-[14px] text-foreground', config[view].color)"
        @click="app.setView(view)">
        <component :is="config[view].icon" :size="8"/>
    </button>
</template>
