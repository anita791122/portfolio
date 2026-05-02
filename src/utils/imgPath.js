const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export const ip = (src) => `${base}${src}`
