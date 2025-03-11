<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ClipBoardItemType } from '@/lib/types'
import { copiedToast } from '@/store/flags'
import { useAppStore } from '@/store/useAppStore'
import { useItemsStore } from '@/store/useItemsStore'
import { ClipboardSetText } from '@/wailsjs/runtime'
import { PinIcon, PinOffIcon, Trash } from 'lucide-vue-next'

const props = defineProps<{
    item: ClipBoardItemType
}>()

const items = useItemsStore()
const app = useAppStore()

function copyText() {
    ClipboardSetText(props.item.text)
    copiedToast.show()

    if (app.lastView === 'circle') {
        app.setView('circle')
    }
}

</script>

<template>
    <div
        class="p-2 rounded-lg bg-background shadow flex items-start space-x-1 cursor-pointer hover:bg-green-50"
        @click="copyText">
        <Button @click.stop="item.pinned = !item.pinned" class="flex-shrink-0" size="icon" variant="ghost">
            <PinIcon v-if="!item.pinned"/>
            <PinOffIcon v-else/>
        </Button>
        <Button @click.stop="items.remove(item)" class="flex-shrink-0" size="icon" variant="ghost">
            <Trash class="text-destructive"/>
        </Button>
        <pre class="flex-grow whitespace-pre-line">{{ item.text }}</pre>
    </div>
</template>
