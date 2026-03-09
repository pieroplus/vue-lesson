import { ref, shallowRef, watch, nextTick, type Ref } from 'vue'
const useRefHistory = <T>(source: Ref<T>) => {
  const history = shallowRef<T[]>([])
  let isUndoing = false

  watch(source, (_, oldVal) => {
    if (isUndoing) return
    history.value.push(oldVal)
  })

  const undo = async () => {
    const prev = history.value.pop()

    if (prev !== undefined) {
      isUndoing = true
      source.value = prev
      await nextTick()
      isUndoing = false
    }
  }

  return { history, undo }
}
export { useRefHistory }
