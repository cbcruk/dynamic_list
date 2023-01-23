export function render(length = 100) {
  const appElem = document.getElementById('app')

  if (!appElem) {
    return
  }

  const items = Array.from({ length })
    .map((_, i) => {
      const id = i + 1

      return `<div data-list-item><div data-item="${id}">${id}</div></div>`
    })
    .join('\n')

  appElem.innerHTML = `<div data-list>${items}</div>
    <div data-dialog data-status="hidden" />`
}
