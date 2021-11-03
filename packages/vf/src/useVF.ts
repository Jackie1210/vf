import { ref } from 'vue'
import { defaultConfig } from './utils/config'
import type { AsyncFn } from './type'

export const useVF = <T, P>(
  fn: AsyncFn<T, P>,
  config: typeof defaultConfig
) => {
  const isLoading = ref(false)
  const isFinished = ref(false)

  const { catchErr } = config

  const excute = async (params?: T) => {
    try {
      isLoading.value = true
      const res = await fn(params)
  
      return res
    } catch (e) {
      if (catchErr) throw e
    } finally {
      isLoading.value = false
      isFinished.value = true
    }
  }

  return {
    isLoading,
    isFinished,
    excute
  }
}
