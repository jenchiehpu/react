/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const VIDEO_DATAS = [
  { vid: '9NsTQiA7-BE', img: require('img/pic01.jpg') },
  { vid: 'rxYgbKFr2iw', img: require('img/pic02.jpg') },
  { vid: 'oUipiVwEUrI', img: require('img/pic03.jpg') },
  { vid: 'Ghrk0tVwx14', img: require('img/pic04.jpg') },
  { vid: 'gf0fLrzchBk', img: require('img/pic05.jpg') },
  { vid: 'pAyMDW2we1s', img: require('img/pic06.jpg') },
];

const Videos = () => {
  return (
    <>
      <section data-name="Videos">
        <div className="row">
          {VIDEO_DATAS.map(({ vid, img }) => (
            <div className="col-6" key={vid}>
              <Link className="image" to={`/video/${vid}`}>
                <img src={img} alt="" className="w-100 mb-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <div className="videos__outlet">
        <Outlet />
      </div>
    </>
  );
};

export default React.memo(Videos);
