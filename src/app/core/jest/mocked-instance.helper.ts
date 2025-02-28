type AbstractConstructor<T> = abstract new (...args: never[]) => T;
type Constructor<T> = new (...args: never[]) => T;

/**
 * Instance a Mocked object. Be sure to mock the module of the classType before using the function.
 * A simple trick to avoid the class constructor parameter when creating a mock object.
 */
export function mockedInstance<T>(classType: Constructor<T> | AbstractConstructor<T>): T {
  return new (classType as jest.Mock)();
}
