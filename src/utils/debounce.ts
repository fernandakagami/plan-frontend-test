// eslint-disable-next-line no-unused-vars
export const debounceFilter = <T extends (...args: any[]) => void>(func: T, wait: number = 450) => {
  let timer: ReturnType<typeof setTimeout> | null = null

  const debouncedFunction = (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => func(...args), wait)
  }

  debouncedFunction.cancel = () => {
    if (timer) clearTimeout(timer)
    timer = null
  }

  debouncedFunction.flush = (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer)
      func(...args)
      timer = null
    }
  }

  return debouncedFunction
}

let timer: ReturnType<typeof setTimeout>

export const debounce = (cb: () => void, time: number = 450) => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => cb(), time)
}
