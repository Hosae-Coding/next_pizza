import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

export const PizzaCard = () => {
   return (
      <div className={styles.container}>
         <Image src="/img/pizza.png" alt="" width="500" height="500" />
         <h1 className={styles.title}>PEPPERONI PIZZA </h1>
         <span className={styles.desc}>Cheese and Pepperoni Collaboration</span>
      </div>
   );
};
