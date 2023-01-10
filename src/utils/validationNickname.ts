const nicknameRules = /^[A-z0-9_-]{3,10}$/;

export const validationNickname = (nickname: string) => {
  if (!nickname.length || !nicknameRules.test(nickname)) {
    return false;
  }

  return nickname;
};
