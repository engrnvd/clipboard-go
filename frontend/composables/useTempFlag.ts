import { ref } from 'vue'

export const useTempFlag = (duration: number, defaultState = false) => {
  const flag = ref(defaultState)

  const show = () => {
    flag.value = true
    setTimeout(() => flag.value = false, duration)
  }

  return { flag, show }
}
