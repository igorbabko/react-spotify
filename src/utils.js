export const MIN_DESKTOP_WIDTH = 900;

let debounceTimer = null;

export function debounce(callback, wait = 300) {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(callback, wait);
}
