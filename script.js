    
    function setLanguage(lang) {
      const translation = translations[lang];
      const keys = Object.keys(translation);
      keys.forEach(key => {
        const element = document.getElementById(key);
        if (element) {
          element.innerText = translation[key];
        }
      });
    }
    
    // Initialize with default language (English)
    setLanguage('en');
    
    // Language Switcher
    const languageSelector = document.createElement('select');
    const languages = Object.keys(translations);
    languages.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang;
      option.text = lang.toUpperCase();
      languageSelector.appendChild(option);
    });
    languageSelector.addEventListener('change', (event) => {
      setLanguage(event.target.value);
    });
    
    const title = document.getElementById('title');
    title.parentNode.insertBefore(languageSelector, title.nextSibling);
