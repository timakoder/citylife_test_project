import React, { useEffect, useState } from 'react';
import PageSpinner from '../Spinners/PageSpinner';
import PhotoList from './List';
import * as PhotoRequests from '../../models/photo/requests';
import { Photo } from '../../models/photo/types';

export default () => {
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  const setSelectedPhoto = (photo: Photo) => {
    console.log(photo);
  }

  useEffect(() => {
    const pullPhotos = async () => {
      const photos = await PhotoRequests.getPhotos();
      setPhotos(photos);
    };

    pullPhotos();
  }, []);

  if (photos === null) {
    return <PageSpinner/>
  }

  return <PhotoList
    items={photos}
    onClick={setSelectedPhoto}
  />
}
