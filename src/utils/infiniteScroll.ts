export const throttleByRequestAnimationFrame = (callback: () => void) => {
  if (!callback) {
    throw Error("Invaild required arguments");
  }

  return () => {
    return requestAnimationFrame(() => {
      return callback();
    });
  };
};
