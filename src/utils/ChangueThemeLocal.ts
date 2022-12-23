export const handleChangeThemeInLocalStorage = (theme: string) => {
  localStorage.setItem('theme', theme)
  document.documentElement.classList.toggle('dark')
}
