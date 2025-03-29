// UI entry point - will be expanded later
export {};

interface PluginMessage {
  type: 'create-shapes' | 'cancel';
  count?: number;
}

document.getElementById('create')?.addEventListener('click', () => {
  const textbox = document.getElementById('count') as HTMLInputElement;
  const count = parseInt(textbox.value, 10);
  window.parent.postMessage({ pluginMessage: { type: 'create-shapes', count } } as any, '*');
});

document.getElementById('cancel')?.addEventListener('click', () => {
  window.parent.postMessage({ pluginMessage: { type: 'cancel' } } as any, '*');
});
