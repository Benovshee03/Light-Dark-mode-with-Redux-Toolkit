export const modeActions = {
    toggleTheme: state => {
      console.log(state);
      return state === 'dark-theme' ? 'light-theme' : 'dark-theme';
    }
  };