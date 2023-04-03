import { isEmail } from '../src/isEmail';
import { isIdentityCard } from '../src/isIdentityCard';
import { isMobilePhone } from '../src/isMobilePhone';
import { isTel } from '../src/isTel';
import { isValidPassword } from '../src/isValidPassword';
import { isZh } from '../src/isZh';
import { isZhEn } from '../src/isZhEn';
import { isZhP } from '../src/isZhP';
import { toUpperCase } from '../src/toUpperCase';

export {
  isEmail,
  isIdentityCard,
  isMobilePhone,
  isTel,
  isValidPassword,
  isZh,
  isZhEn,
  isZhP,
  toUpperCase,
};

const validate = {
  isEmail,
  isIdentityCard,
  isMobilePhone,
  isTel,
  isValidPassword,
  isZh,
  isZhEn,
  isZhP,
  toUpperCase,
};
export default validate;
