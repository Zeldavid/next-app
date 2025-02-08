export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

export const addToLocalStorageArray = (key: string, newItem: any) => {
  const existingCart = getFromLocalStorage(key) || [];

  const exists = existingCart.some((item: string) => {
    return JSON.parse(item).id === JSON.parse(newItem).id;
  });

  if (!exists) {
    const updatedArray = [...existingCart, newItem];
    saveToLocalStorage(key, updatedArray);
  }
};

export const removeItemFromLocalStorage = (key: string, id: string) => {
  let existingCart = getFromLocalStorage(key) || [];
  const newCart = existingCart.filter(
    (item: any) => JSON.parse(item).id !== id
  );
  const updatedArray = [...newCart];
  saveToLocalStorage(key, updatedArray);
};

export const validateItemExistInLocalStorage = (key: string, id: string) => {
  let existingCart = getFromLocalStorage(key) || [];
  const exists = existingCart.some((item: string) => {
    return JSON.parse(item).id === id;
  });
  return exists;
};

export const clearAllStorage = () => {
  localStorage.clear();
};
