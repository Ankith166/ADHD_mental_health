// Uses the same styles as Product
import Pagenav from "./PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <Pagenav />
      <section>
        <div>
          <h2>
            Facing problems.
            <br />
            Contact us!!!
          </h2>
        </div>
        <img
          src="https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY="
          alt="contact us"
        />
      </section>
    </main>
  );
}
