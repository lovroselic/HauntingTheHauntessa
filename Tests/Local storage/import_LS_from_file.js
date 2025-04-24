(function importLocalStorageFromFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
  
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        Object.entries(data).forEach(([key, value]) => {
          localStorage.setItem(key, value);
        });
        console.log('✅ LocalStorage import completed successfully.');
      };
  
      reader.onerror = (err) => {
        console.error('File read error:', err);
      };
  
      reader.readAsText(file);
    };
  
    input.click();
  })();
  