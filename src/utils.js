let debounceTimer = null;

export function debounce(callback, wait = 300) {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(callback, wait);
}
