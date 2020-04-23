import apiRequest from '../../utils/api-request';
import { Photo, PhotoWithComments } from './types';

export const getPhotos = async (): Promise<Array<Photo>> => {
  const photos = await apiRequest<Array<Photo>>({
    method: 'get',
    endpoint: 'images'
  });

  return photos;
}