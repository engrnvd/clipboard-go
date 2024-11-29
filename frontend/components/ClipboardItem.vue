<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { copiedToast } from '@/store/flags'
import { useItemsStore } from '@/store/useItemsStore'
import { ClipboardSetText } from '@/wailsjs/runtime'
import { Trash } from 'lucide-vue-next'

const props = defineProps<{
    text: string
}>()

const items = useItemsStore()

function copyText() {
    ClipboardSetText(props.text)
    copiedToast.show()
}

</script>

<template>
    <div class="p-4 rounded shadow flex items-center space-x-2 cursor-pointer hover:bg-gray-50" @click="copyText">
        <pre class="flex-grow whitespace-pre-line">{{ text }}</pre>
        <Button @click.stop="items.remove(text)" class="flex-shrink-0" size="icon" variant="ghost">
            <Trash class="text-destructive"/>
        </Button>
    </div>
</template>
