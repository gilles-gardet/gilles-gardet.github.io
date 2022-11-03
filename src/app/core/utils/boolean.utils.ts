export class BooleanUtils {
  /**
   * Cast or transform a string value to its boolean equivalent.
   *
   * @param value the value to transform
   * @return the flag corresponding to the string value
   */
  static stringToBoolean(value: string): boolean {
    if (!value) {
      return false;
    }
    value = value.toLowerCase().trim();
    switch (value) {
      case 'true':
      case 'yes':
      case '1':
        return true;
      case 'false':
      case 'no':
      case '0':
      case null:
        return false;
      default:
        return Boolean(value);
    }
  }
}
