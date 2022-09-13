export const getProducts = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject("error");
      }
    }, 2000);
  });
