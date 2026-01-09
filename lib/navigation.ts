/**
 * Smooth scroll utility for navigation
 */
export function smoothScrollTo(elementId: string, offset: number = 80) {
  if (typeof window === 'undefined') return
  
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Check if an element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Get current active section based on scroll position
 */
export function getActiveSection(sections: string[]): string {
  if (typeof window === 'undefined') return '/'
  
  let activeSection = '/'
  let minDistance = Infinity

  for (const section of sections) {
    const element = document.getElementById(section.replace('#', ''))
    if (element) {
      const rect = element.getBoundingClientRect()
      const distanceFromTop = Math.abs(rect.top - 100)
      
      // If section is in viewport or close to it
      if (rect.top <= 150 && rect.bottom >= 50) {
        if (distanceFromTop < minDistance) {
          minDistance = distanceFromTop
          activeSection = section
        }
      }
    }
  }
  
  return activeSection
}

