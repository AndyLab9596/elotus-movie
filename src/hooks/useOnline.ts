import { useSyncExternalStore } from 'react';

export default function useOnline() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline
}

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback : () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
