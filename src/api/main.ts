import request from '@/utils/request';

export const getMovieDetail = () => {
    return request({
        // tslint:disable-next-line:max-line-length
        url: 'http://localhost:8765/content',
        method: 'GET',
    })
};
