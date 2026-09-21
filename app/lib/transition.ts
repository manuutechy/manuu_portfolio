let release: (() => void) | null = null
let gate: Promise<void> = Promise.resolve()

export function holdIntros() {
  if (release) return
  gate = new Promise<void>((resolve) => {
    release = resolve
  })
}

export function releaseIntros() {
  release?.()
  release = null
}

export function introsReady() {
  return gate
}
