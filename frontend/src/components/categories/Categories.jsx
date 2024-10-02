// import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
// import {
//   GiBarn,
//   GiBoatFishing,
//   GiCactus,
//   GiCastle,
//   GiCaveEntrance,
//   GiForestCamp,
//   GiIsland,
//   GiWindmill,
// } from 'react-icons/gi';
// import { MdOutlineVilla } from 'react-icons/md';
// import CategoryBox from './CategoryBox';
// import { FaSkiing } from 'react-icons/fa';
// import { BsSnow } from 'react-icons/bs';
// import { IoDiamond } from 'react-icons/io5';

// export const categories = [
//   {
//     label: 'Beach',
//     icon: TbBeach,
//     description: 'This property is close to the beach!',
//   },
//   {
//     label: 'Windmills',
//     icon: GiWindmill,
//     description: 'This property has windmills!',
//   },
//   {
//     label: 'Modern',
//     icon: MdOutlineVilla,
//     description: 'This property is modern!',
//   },
//   {
//     label: 'Countryside',
//     icon: TbMountain,
//     description: 'This property is in the countryside!',
//   },
//   {
//     label: 'Pools',
//     icon: TbPool,
//     description: 'This property has a pool!',
//   },
//   {
//     label: 'Islands',
//     icon: GiIsland,
//     description: 'This property is on island!',
//   },
//   {
//     label: 'Lake',
//     icon: GiBoatFishing,
//     description: 'This property is close to a lake!',
//   },
//   {
//     label: 'Skiing',
//     icon: FaSkiing,
//     description: 'This property has skiing activities!',
//   },
//   {
//     label: 'Castles',
//     icon: GiCastle,
//     description: 'This property is in a castle!',
//   },
//   {
//     label: 'Camping',
//     icon: GiForestCamp,
//     description: 'This property has camping activites!',
//   },
//   {
//     label: 'Arctic',
//     icon: BsSnow,
//     description: 'This property showing artic!',
//   },
//   {
//     label: 'Cave',
//     icon: GiCaveEntrance,
//     description: 'This property is in a cave!',
//   },
//   {
//     label: 'Desert',
//     icon: GiCactus,
//     description: 'This property is in the desert!',
//   },
//   {
//     label: 'Barn',
//     icon: GiBarn,
//     description: 'This property is in the barn!',
//   },
//   {
//     label: 'Lux',
//     icon: IoDiamond,
//     description: 'This property is luxurious!',
//   },
// ];

// const Categories = () => {
//   return (
//     <div className='flex flex-row items-center justify-between pt-4'>
//       {categories.map((item) => (
//         <CategoryBox
//           key={item.label}
//           label={item.label}
//           description={item.description}
//           icon={item.icon}
//         />
//       ))}
//     </div>
//   );
// };
// export default Categories;

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from './CategoryBox';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has a pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is in a castle!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping activites!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property showing artic!',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property is in a cave!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!',
  },
  {
    label: 'Barn',
    icon: GiBarn,
    description: 'This property is in the barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is luxurious!',
  },
];

const Categories = () => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={14}
      navigation
    >
      {categories.map((item) => (
        <SwiperSlide key={item.label}>
          <CategoryBox
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;
