import request from '@/utils/request';

// 获取全部分类
export const getTypeItems = () => {
  return request({
    url: 'http://localhost:8765/selectType',
    method: 'GET',
  })
};

export const createType = (params: any) => {
  return request({
    url: 'http://localhost:8765/selectType/add',
    method: 'POST',
    data: params,
  })
};
