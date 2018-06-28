export const printObject = (obj) => {
  console.log(obj);
}


function errorThrower() {
  throw new Error('new error');
}

export default errorThrower;