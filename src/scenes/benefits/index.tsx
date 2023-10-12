import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Benefits = ({ setSelectedPage }: Props) => {
  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: 'State of the Art facilities',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, est?',
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: '100+ diverse classes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, est?',
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: 'Expert and pro trainers',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, est?',
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <section id="benefits" className="mx-auto m-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div
          className="my-5 md:w--3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          {/* Heading */}
          <HText>MORE THAN JUST THE GYM</HText>
          <p>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justifiy-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}>
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* Description */}
          <div>
            {/* Titile */}
            <div className="relative ">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}>
                  <HText>
                    MILLIONS OF MEMBERS GETTING{' '}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Desriptiop */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                quae odit culpa maxime cumque cum quisquam vel laudantium, id ab
                facere blanditiis architecto quas facilis soluta sunt corrupti,
                possimus laboriosam quia sit. Illum omnis amet optio tenetur,
                modi, soluta dolore ad fugit molestias vel ipsam! Enim
                distinctio quod officiis expedita. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Harum quae odit culpa maxime
                cumque cum quisquam vel laudantium, id ab facere blanditiis
                architecto quas facilis soluta sunt corrupti, possimus
                laboriosam quia sit. Illum omnis amet optio tenetur, modi,
                soluta dolore ad fugit molestias vel ipsam! Enim distinctio quod
                officiis expedita.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo impedit, facilis corrupti fugit delectus laborum iste,
                aliquam, officia eius sunt suscipit eveniet corporis. Aperiam
                perspiciatis incidunt dicta facilis veritatis aspernatur, sunt
                facere vitae, tempore illo animi, autem error at nesciunt.
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
