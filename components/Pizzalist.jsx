import styles from '../styles/Pizzalist.module.css';
import { PizzaCard } from './PizzaCard';

export const Pizzalist = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Best Pizza In Canada</h1>
         <p className={styles.desc}>
            pizza, dish of Italian origin consisting of a flattened disk of
            bread dough topped with some combination of olive oil, oregano,
            tomato, olives, mozzarella or other cheese, and many other
            ingredients, baked quickly—usually, in a commercial setting, using a
            wood-fired oven heated to a very high temperature—and served hot.
         </p>
         <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
         </div>
      </div>
   );
};
