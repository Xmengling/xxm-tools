import fileSize from '../../packages/js/src/fileSize';

describe('函数计算文件大小fileSize', () => {
  it('文件大小为KB', () => {
    expect(fileSize(1024)).toEqual('1.00KB');
    expect(fileSize(1048566)).toEqual('1023.99KB');
  });

  it('文件大小为MB', () => {
    expect(fileSize(1048577)).toEqual('1.00MB');
  });

  it('文件大小为GB', () => {
    expect(fileSize(1073741824)).toEqual('1.00GB');
    expect(fileSize(1099511627775)).toEqual('1024.00GB');
  });
});
