import React, { useRef, useEffect, useState } from 'react';
import LazyImage from '../../common/LazyImage';
import { Photo } from '../../../models/photo/types';
import styles from './List.module.css';
import useColumns from '../../../utils/useColumns';
import cx from 'classnames';


export type PhotoItemProps = {
  photo: Photo,
  onClick: (photo: Photo) => void
};

const PhotoItem: React.FC<PhotoItemProps> = ({
  photo,
  onClick
}) =>
  <div className={styles.photoRoot} onClick={() => onClick(photo)}>
    <img src={photo.url} alt={photo.id.toString()}/>
  </div>

export type PhotoListProps = {
  items: Photo[],
  onClick: (photo: Photo) => void
};

const List: React.FC<PhotoListProps> = ({ items, onClick }) => {
  const listContainerRef = useRef<HTMLDivElement>(null);

  const columns = useColumns(listContainerRef);  

  return <div ref={listContainerRef} className={styles.root}>
    {
      items.map(i => <div className={cx(styles.gridItem, styles[`gridItem-column-${columns}`])} key={i.id}>
        <PhotoItem photo={i} onClick={onClick}/>
      </div>)
    }
  </div>
}

export default List;