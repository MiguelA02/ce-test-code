/*
 * @param {string} string[]
 * Description: This function is used to convert string array to string
 * @return {string}
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
