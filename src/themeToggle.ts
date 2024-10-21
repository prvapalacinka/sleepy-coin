// toggle dark and light theme 
export const handleThemeToggle = (
    currentTheme: string,
    setTheme: (newTheme: string) => void,
    setButtonText: (newText: string) => void
  ) => {
    // Determine new theme
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
  
    // Apply the new theme to the document body
    document.body.className = newTheme;
  
    // Update the state in the parent component (App.tsx)
    setTheme(newTheme);
  
    // Set the button text based on the new theme
    const newButtonText = newTheme === 'light-theme' ? 'Go Sleepy' : 'Wakey';
    setButtonText(newButtonText);
  };
  