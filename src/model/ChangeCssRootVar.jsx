export const ChangeCssRootVar = (theme) => {
    const root = document.querySelector(':root') 
    const components = [
    'components-background', 
    'body-background', 
    'card-background', 
    'card-box-shadow', 
    'text-color']
    components.forEach(component => {
      root.style.setProperty(
        `--${component}-default`, `var(--${component}-${theme})`)
    })
}