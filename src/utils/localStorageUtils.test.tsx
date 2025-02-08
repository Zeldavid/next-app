import * as storage from "./localStorageUtils";

describe("localStorageUtils", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
        clear: jest.fn(),
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should save a value in localStorage", () => {
    const key = "testKey";
    const value = { name: "David Carrero", age: 34 };

    storage.saveToLocalStorage(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  it("should get a value from localStorage", () => {
    const key = "testKey";
    const value = { name: "David Carrero", age: 34 };

    (localStorage.getItem as jest.Mock).mockReturnValue(JSON.stringify(value));

    const result = storage.getFromLocalStorage(key);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toEqual(value);
  });

  it("should return null if key does not exist in localStorage", () => {
    const key = "nonExistentKey";

    (localStorage.getItem as jest.Mock).mockReturnValue(null);

    const result = storage.getFromLocalStorage(key);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(result).toBeNull();
  });

  it("should add a new item to localStorage array if it does not exist", () => {
    const key = "cart";
    const newItem = JSON.stringify({ id: 1, name: "Product 1" });

    (localStorage.getItem as jest.Mock).mockReturnValue(null);

    storage.addToLocalStorageArray(key, newItem);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify([newItem])
    );
  });

  it("should not add duplicate item to localStorage array", () => {
    const key = "cart";
    const existingItem = JSON.stringify({ id: 1, name: "Product 1" });

    (localStorage.getItem as jest.Mock).mockReturnValue(
      JSON.stringify([existingItem])
    );

    storage.addToLocalStorageArray(key, existingItem);

    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it("should remove an item from localStorage array", () => {
    const key = "cart";
    const item1 = JSON.stringify({ id: "1", name: "Product 1" });
    const item2 = JSON.stringify({ id: "2", name: "Product 2" });

    (localStorage.getItem as jest.Mock).mockReturnValue(
      JSON.stringify([item1, item2])
    );

    storage.removeItemFromLocalStorage(key, "1");

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify([item2])
    );
  });

  it("should validate if an item exists in localStorage", () => {
    const key = "cart";
    const existingItem = JSON.stringify({ id: "1", name: "Product 1" });

    (localStorage.getItem as jest.Mock).mockReturnValue(
      JSON.stringify([existingItem])
    );

    const exists = storage.validateItemExistInLocalStorage(key, "1");

    expect(exists).toBe(true);
  });

  it("should return false if an item does not exist in localStorage", () => {
    const key = "cart";
    (localStorage.getItem as jest.Mock).mockReturnValue(JSON.stringify([]));

    const exists = storage.validateItemExistInLocalStorage(key, "1");

    expect(exists).toBe(false);
  });

  it("should clear all storage", () => {
    storage.clearAllStorage();

    expect(localStorage.clear).toHaveBeenCalled();
  });
});
