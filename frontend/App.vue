<script lang="ts" setup>
import CircleView from '@/components/CircleView.vue'
import ClipboardItem from '@/components/ClipboardItem.vue'
import CopiedToast from '@/components/CopiedToast.vue'
import MainHeader from '@/components/MainHeader.vue'
import Search from '@/components/Search.vue'
import { useAppStore } from '@/store/useAppStore'
import { useItemsStore } from '@/store/useItemsStore'
import { onMounted } from 'vue'

const items = useItemsStore()
const app = useAppStore()

onMounted(() => {
    if (items.length && !items[0].hasOwnProperty('text')) items.clear()
    setInterval(items.update, 3000)
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
            <template v-for="(item, i) in items.queriedData" :key="item.text">
                <ClipboardItem :item="item"/>
                <hr v-if="item.pinned && items.queriedData[i+1] && !items.queriedData[i+1].pinned"
                    class="border-t-0 border-b border-gray-100 !my-3">
            </template>
            <div key="none" v-if="!items.data.length" class="text-muted-foreground">Text you copy will appear here.
            </div>
        </div>
    </main>
    <CopiedToast/>
</template>
