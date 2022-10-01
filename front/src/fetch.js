// fetch.js
import { ref } from 'vue'

export function useFetch(url, opts) {
  const data = ref(null)
  const error = ref(null)

  fetch(url, opts)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}