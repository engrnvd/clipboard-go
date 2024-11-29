<script lang="ts" setup>
import ClipboardItem from '@/components/ClipboardItem.vue'
import CopiedToast from '@/components/CopiedToast.vue'
import MainHeader from '@/components/MainHeader.vue'
import Search from '@/components/Search.vue'
import { useItemsStore } from '@/store/useItemsStore'
import { onMounted } from 'vue'
import { copiedToast } from './store/flags'

const items = useItemsStore()

onMounted(() => {
    setInterval(items.update, 1000)
})
</script>

<template>
    <main>
        <div class="sticky top-0 bg-background shadow">
            <MainHeader/>
            <div class="px-4 py-2">
                <Search/>
            </div>
        </div>
        <div class="p-4 flex flex-col space-y-2">
            <ClipboardItem
                v-for="i in items.queriedData"
                :key="i"
                :text="i"
            />
            <div v-if="!items.data.length" class="text-muted-foreground">Text you copy will appear here.</div>
        </div>
        <CopiedToast/>
    </main>
</template>
