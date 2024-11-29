import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ClipboardGetText, ClipboardSetText } from '../wailsjs/runtime'

export const useItemsStore = defineStore('items', () => {
  const data = useLocalStorage<string[]>('clipboard-items', [])
  const query = ref<string>('')

  const queriedData = computed(() => data.value.filter(i => i.toLowerCase().includes(query.value.toLowerCase())))

  const update = async () => {
    const clipText = await ClipboardGetText()
    if (clipText && !data.value.includes(clipText)) {
      data.value.unshift(clipText)
    }
  }

  const remove = async (text: string) => {
    data.value.splice(data.value.indexOf(text), 1)
    const clipText = await ClipboardGetText()
    if (clipText === text) await ClipboardSetText('')
  }

  const clear = async () => {
    data.value = []
    await ClipboardSetText('')
  }

  return {
    data, update, remove, queriedData, clear, query
  }
})
