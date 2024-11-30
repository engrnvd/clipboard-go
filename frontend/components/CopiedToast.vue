<script setup lang="ts">
import { copiedToast } from '@/store/flags'
</script>

<template>
    <div v-auto-animate class="w-24 h-6 text-xs text-center fixed right-4 bottom-4">
        <div key="1" v-if="copiedToast.flag.value"
             class="px-6 py-1 rounded-full opacity-90 shadow bg-foreground text-background">
            Copied...
        </div>
    </div>
</template>
