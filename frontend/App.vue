<script lang="ts" setup>
import CircleView from '@/components/CircleView.vue'
import ClipboardItem from '@/components/ClipboardItem.vue'
import CopiedToast from '@/components/CopiedToast.vue'
import MainHeader from '@/components/MainHeader.vue'
import Search from '@/components/Search.vue'
import { useAppStore } from '@/store/useAppStore'
import { useItemsStore } from '@/store/useItemsStore'
import { onMounted } from 'vue'
import { copiedToast } from './store/flags'

const items = useItemsStore()
const app = useAppStore()

onMounted(() => {
    setInterval(items.update, 1000)
})
</script>

<template>
    <CircleView v-if="app.view === 'circle'"/>
    <main v-else class="bg-gray-200 h-screen rounded-lg overflow-hidden flex flex-col transition-all">
        <div class="sticky top-0 z-10 bg-background shadow">
            <MainHeader/>
            <div class="p-2">
                <Search/>
            </div>
        </div>
        <div v-auto-animate class="p-2 flex flex-col space-y-2 flex-grow overflow-y-auto">
            <ClipboardItem
                v-for="i in items.queriedData"
                :key="i"
                :text="i"
            />
            <div key="none" v-if="!items.data.length" class="text-muted-foreground">Text you copy will appear here.
            </div>
        </div>
    </main>
    <CopiedToast/>
</template>
