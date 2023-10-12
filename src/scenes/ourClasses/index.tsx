import { SelectedPage, ClassType } from '@/shared/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
  {
    name: 'Weight training',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ex officiis ratione praesentium quod eaque temporibus perspiciatis eligendi ipsum neque?',
    image: image1,
  },
  {
    name: 'Yoga',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ex officiis ratione praesentium quod eaque temporibus perspiciatis eligendi ipsum neque?',
    image: image2,
  },
  {
    name: 'Ab core',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ex officiis ratione praesentium quod eaque temporibus perspiciatis eligendi ipsum neque?',
    image: image3,
  },
  {
    name: 'Adventure',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ex officiis ratione praesentium quod eaque temporibus perspiciatis eligendi ipsum neque?',
    image: image4,
  },
  {
    name: 'Fitness',
    image: image5,
  },
  {
    name: 'Training',
    image: image6,
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="py-40 w-full bg-primary-100">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              enim sit rerum, sequi atque id necessitatibus assumenda error esse
              eligendi veniam nobis, voluptate praesentium fugiat aut optio
              ducimus placeat expedita sunt libero dolorem. Modi quia ducimus,
              quaerat quis nostrum reiciendis veritatis praesentium aliquam iure
              voluptatum! Delectus voluptate enim exercitationem ea earum
              voluptatem dicta voluptates, autem fugit repudiandae quis commodi
              reiciendis unde esse illum possimus.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
