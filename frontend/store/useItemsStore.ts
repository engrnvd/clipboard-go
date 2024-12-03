import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ClipBoardItemType } from '../lib/types'
import { ClipboardGetText, ClipboardSetText } from '../wailsjs/runtime'

export const useItemsStore = defineStore('items', () => {
  const data = useLocalStorage<ClipBoardItemType[]>('clipboard-items', [])
  const query = ref<string>('')

  const queriedData = computed(() => data.value
    .filter(i => i.text.toLowerCase().includes(query.value.toLowerCase()))
    .sort((a, b) => a.pinned ? -1 : (b.pinned ? 0 : 1))
  )

  const update = async () => {
    const clipText = await ClipboardGetText()
    if (clipText && !data.value.find(i => i.text === clipText)) {
      data.value.unshift({ text: clipText, pinned: false })
    }
  }

  const remove = async (item: ClipBoardItemType) => {
    data.value.splice(data.value.indexOf(item), 1)
    const clipText = await ClipboardGetText()
    if (clipText === item.text) await ClipboardSetText('')
  }

  const clear = async () => {
    data.value = data.value.filter(i => i.pinned)
    await ClipboardSetText('')
  }

  return {
    data, update, remove, queriedData, clear, query
  }
})
