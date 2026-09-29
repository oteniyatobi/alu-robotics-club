// Fetch registration count from a Google Apps Script web app using JSONP
// (avoids the CORS redirect issue with script.google.com)
export function fetchCount(scriptUrl, onCount) {
  const id = `gascb_${Date.now()}_${Math.random().toString(36).slice(2)}`

  const cleanup = () => {
    delete window[id]
    const el = document.getElementById(id)
    if (el) el.remove()
  }

  window[id] = (data) => {
    cleanup()
    if (data && typeof data.count === 'number') onCount(data.count)
  }

  const script = document.createElement('script')
  script.id = id
  script.src = `${scriptUrl}?callback=${id}`
  script.onerror = cleanup
  document.head.appendChild(script)

  const timeout = setTimeout(cleanup, 7000)

  return () => {
    clearTimeout(timeout)
    cleanup()
  }
}
