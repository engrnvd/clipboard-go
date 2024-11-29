<script setup lang="ts">
import { copiedToast } from '@/store/flags'
</script>

<template>
    <div v-if="copiedToast.flag.value"
         class="p-2 opacity-90 text-sm min-w-52 rounded shadow text-center fixed right-4 bottom-4 bg-primary text-background">
        Copied...
    </div>
</template>
