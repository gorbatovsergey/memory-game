const nickname =
  //eslint-disable-next-line
  /^[A-z0-9_-]{3,10}$/;

export const validationNickname = (value: string) => {
  if (!value.length || !nickname.test(value)) {
    return false;
  }

  return value;
};
