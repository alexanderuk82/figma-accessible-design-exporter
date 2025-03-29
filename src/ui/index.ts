// UI entry point - will be expanded later
document.getElementById('create')?.addEventListener('click', () => {
  const textbox = document.getElementById('count') as HTMLInputElement;
  const count = parseInt(textbox.value, 10);
  parent.postMessage({ pluginMessage: { type: 'create-shapes', count } }, '*');
});

document.getElementById('cancel')?.addEventListener('click', () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
});
