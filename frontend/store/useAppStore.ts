import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { AppView } from '../lib/types'
import { WindowMinimise, WindowSetSize } from '../wailsjs/runtime'

export const useAppStore = defineStore('app', () => {
  const view = useLocalStorage<AppView>('app-view', 'full')
  const lastView = useLocalStorage<AppView>('app-last-view', 'full')

  const setView = async (v: AppView, silent = false) => {
    const oldValue = view.value
    if (!silent) lastView.value = oldValue

    view.value = v

    switch (v) {
      case 'circle':
        await WindowSetSize(56, 56)
        break
      case 'full':
        await WindowSetSize(450, 700)
        break
      case 'minimised':
        await WindowMinimise()
        break
    }
  }

  return {
    view,
    lastView,
    setView,
  }
})
