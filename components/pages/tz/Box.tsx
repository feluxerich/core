import Slider, { Settings } from 'react-slick';
import sift from 'sift';
import _ from 'underscore';
import { isIterable, moveToFront } from '@utils/array';
import { BoxProps, TableProps } from '@Types/timezone';
import tz from '@utils/api/timezone/main';
import Time from '@components/pages/tz/Time';

const Box: BoxProps = ({ timezones: inArr }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };

  const table = tz.table();
  const local = tz.moment.tz.guess();

  const timezones = table.filter(
    sift({
      timezone: {
        $in: _.unique([local, 'Universal', ...(isIterable(inArr) ? inArr : [])]),
      },
    }),
  );

  return (
    <div className="max-w-sm w-full px-8 py-8 bg-primary-900 text-center">
      <Slider {...settings}>
        {moveToFront(moveToFront(timezones, 'Universal', 'timezone'), local, 'timezone').map(({ name, timezone }: TableProps) => (
          <div className="flex flex-col w-full" key={name}>
            <p className="font-bold mb-1">{`${timezone} (${name})`}</p>
            <Time timezone={timezone} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Box;
