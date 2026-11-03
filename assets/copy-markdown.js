(() => {
  const source = document.getElementById('markdown-source');
  if (!source) return;
  const markdown = JSON.parse(source.textContent);
  for (const button of document.querySelectorAll('[data-copy-markdown]')) {
    button.setAttribute('aria-live', 'polite');
    button.addEventListener('click', async () => {
      const original = button.textContent;
      let copied = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(markdown);
          copied = true;
        }
      } catch (_) { /* Local files may require the selection fallback. */ }
      if (!copied) {
        const selection = document.createElement('textarea');
        selection.value = markdown;
        selection.setAttribute('aria-label', 'Markdown to copy');
        selection.style.cssText = 'position:fixed;left:0;top:0;width:1px;height:1px;opacity:0';
        document.body.append(selection);
        selection.focus();
        selection.select();
        try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
        selection.remove();
        button.focus();
      }
      button.textContent = copied ? 'Copied ✓' : 'Use the Markdown link to copy';
      window.setTimeout(() => {
        button.textContent = original;
      }, 3000);
    });
  }
})();
