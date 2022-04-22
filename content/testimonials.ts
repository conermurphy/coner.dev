import { Testimonial } from '../types';
import graceMiller from './assets/testimonials/grace-miller.jpg';
import emilyKochanekKetner from './assets/testimonials/emily-kochanek-ketner.png';

const testimonials: Testimonial[] = [
  {
    copy: "After working with Coner on several occasions, I've found that he's a thoughtful collaborator with excellent communication skills. I know that when I bring him onto a project, I can rely on a carefully researched and planned final product.",
    quotee: {
      name: 'Grace Miller',
      jobTitle: 'Content Strategist',
      company: 'Prismic',
      image: graceMiller,
    },
  },
  {
    copy: 'Coner is a strong technical writer when writing about frontend development. He is consistent and thorough, presenting concepts in an easily-digestible format. He takes feedback constructively to improve his work and continuously strives to be a better technical writer.',
    quotee: {
      name: 'Emily Kochanek Ketner ',
      jobTitle: 'Content Marketing Manager',
      company: 'LogRocket',
      image: emilyKochanekKetner,
    },
  },
];

export default testimonials;
