export const compose = (...arg) => arg.reduce((a, b) => (...args) => a(b(...args)));

export const pipe = (...arg) => arg.reduce((a, b) => (...args) => b(a(...args)));

export const curry = (arity, fn) => {
  const curried = (arg) => (...newArg) => {
    const all = arg.concat(newArg);
    return all.length < arity ? curried(all) : fn(...all);
  };
  return curried([]);
};
