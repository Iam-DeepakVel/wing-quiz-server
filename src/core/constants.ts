export const REGEX = {
  PASSWORD_RULE:
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
};

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE:
    'Password should have 1 upper case , lower case letter along with a number and special character',
};

export const jwtConstants = {
  secret: `${process.env.JWT_SECRET}`,
};
