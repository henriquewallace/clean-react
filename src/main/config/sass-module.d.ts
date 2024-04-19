declare module '*.scss' {
  // or const content: { [className: string]: string }
  const content: Record<string, string>
  export = content
}
