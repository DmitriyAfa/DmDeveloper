// Images
import img1 from '../../assets/images/Projects/1.jpg';
import img2 from '../../assets/images/Projects/2.jpg';
import img3 from '../../assets/images/Projects/3.jpg';
import img4 from '../../assets/images/Projects/4.jpg';
import img5 from '../../assets/images/Projects/5.jpg';
// Types
export interface IData {
  header: string;
  img: string;
  href: string;
  clName?: string;
}

export const projectsConst: IData[] = [
  {
    header: "DmDeveloper",
    img: img1,
    href: '/about',
    clName: 'image_1'
  },
  {
    header: "Stellar burgers",
    img: img2,
    href: '/stellar',
    clName: 'image_2'
  },
  {
    header: "Remont",
    img: img3,
    href: '/remont',
    clName: 'image_3'
  },
  {
    header: "R & M",
    img: img4,
    href: '/',
    clName: 'image_rm'
  },
  {
    header: "Futurama",
    img: img5,
    href: '/',
    clName: 'image_futurama'
  },
]