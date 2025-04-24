(function exportLocalStorage() {
    const data = JSON.stringify(localStorage, null, 2);
    console.log("Copy this localStorage JSON:\n", data);
    copy(data); // clipboard
  })();
  