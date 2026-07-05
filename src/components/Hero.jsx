import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/profilephoto.png"
              className={styles.image}
              alt="Milianny Cova"
            />
          </div>

          <h1 className={styles.title}>
            Milianny Cova
          </h1>

          <p className={styles.role}>
            Desenvolvedora Full Stack · Data · IA
          </p>
        </div>
      </div>
    </section>
  );
}