let debounceTimer = null;

export function debounce(callback, delay) {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(callback, delay);
}
