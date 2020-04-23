export const debounce = (timeout: number) => (func: (...params: any[]) => void) => {
  let timer: NodeJS.Timeout;

  return (...params: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => func(...params), timeout);
  }
}