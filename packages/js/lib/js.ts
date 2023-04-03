import { checkDataType } from '../src/checkDataType';
import { getDevice } from '../src/getDevice';
import { exportExcelBlob } from '../src/exportExcelBlob';
import { exportExcelJson } from '../src/exportExcelJson';
import { debounce } from '../src/debounce';
import { throttle } from '../src/throttle';
import { getUrlParams } from '../src/getUrlParams';
import convertEmpties from '../src/convertEmpties';
import getValueByPath from '../src/getValueByPath';
import isEqual from '../src/isEqual';
import uniq from '../src/uniq';
import regexp from '../src/regexp';
import { useCopy } from '../src/useCopy';

export {
  checkDataType,
  getDevice,
  exportExcelBlob,
  exportExcelJson,
  debounce,
  throttle,
  getUrlParams,
  convertEmpties,
  getValueByPath,
  isEqual,
  uniq,
  regexp,
  useCopy,
};

const js = {
  checkDataType,
  getDevice,
  exportExcelBlob,
  exportExcelJson,
  debounce,
  throttle,
  getUrlParams,
  convertEmpties,
  getValueByPath,
  isEqual,
  uniq,
  regexp,
  useCopy,
};
export default js;
