(function exportLocalStorage() {
    const data = JSON.stringify(localStorage);
    console.log("Copy this localStorage JSON:\n", data);
    copy(data); // clipboard
  })();
  