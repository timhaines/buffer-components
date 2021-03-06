// Inspired by: https://github.com/JedWatson/classnames
export const classNames = (styles, ...args) => { // eslint-disable-line import/prefer-default-export
  const styleKeys = args.reduce((classes, arg) => {
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes = classes.concat(arg);
    } else if (argType === 'object') {
      Object.keys(arg).forEach((key) => {
        // Use another Object's hasOwnProperty and call it with 'this' set to arg
        if (({}).hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      });
    }
    return classes;
  }, []);
  return [...new Set(styleKeys)].map(key => styles[key]).join(' ');
};
