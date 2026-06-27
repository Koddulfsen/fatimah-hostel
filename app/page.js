import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h2>Come Chill.</h2>
          <ul className={styles.bulletList}>
            <li>30RM a night.</li>
            <li>Shared living space.</li>
            <li>Shower and western toilet.</li>
          </ul>
        </div>
        <div className={styles.imageGrid}>
          <img src="/living-room.jpeg" alt="Living room" className={styles.imgMain} />
          <div className={styles.imageStack}>
            <img src="/beds.jpeg" alt="Beds" className={styles.imgSmall} />
            <img src="/bathroom.jpeg" alt="Bathroom" className={styles.imgSmall} />
          </div>
        </div>
      </section>

      <div className={styles.gallerySpacer} />
      <div className={styles.galleryWrapper}>
      <h2 className={styles.galleryTitle}>Vibes.</h2>
      <section className={styles.gallery}>
        <div className={styles.galleryLeft}>
          <img src="/beach.jpeg" alt="Beach" className={styles.galleryBeach} />
          <div className={styles.galleryBottom}>
            <img src="/pier3.jpeg" alt="Pier" className={styles.gallerySmall} />
            <img src="/coast2.jpeg" alt="Coast" className={styles.gallerySmall} />
          </div>
        </div>
        <div className={styles.galleryRight}>
          <img src="/ricefields2.jpeg" alt="Rice fields" className={styles.galleryStacked} />
          <img src="/buffalosandpalmtrees.jpeg" alt="Buffalos and palm trees" className={styles.galleryStacked} />
        </div>
      </section>
      </div>

      <section className={styles.gettingHere}>
        <h2 className={styles.gettingHereTitle}>Getting Here.</h2>
        <div className={styles.steps2}>
          <div className={`${styles.step} ${styles.stepRight}`}>
            <img src="/jeti.png" alt="Jeti Pelancongan Pekan Rabu" className={styles.stepImg} />
            <div className={styles.stepText}>
              <span className={styles.stepNum}>01</span>
              <p>Head to <strong>Jeti Pelancongan Pekan Rabu</strong> in Langkawi and hop on the ferry to Pulau Tuba. It's a 15 minute ride.</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepLeft}`}>
            <img src="/jetipulautuba.png" alt="Jeti Pulau Tuba" className={styles.stepImg} />
            <div className={styles.stepText}>
              <span className={styles.stepNum}>02</span>
              <p>Arrive at <strong>Jeti Pulau Tuba</strong>. From here it's a short 6 minute ride to the hostel.</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepRight}`}>
            <img src="/6minride.png" alt="Route to hostel" className={styles.stepImg} />
            <div className={styles.stepText}>
              <span className={styles.stepNum}>03</span>
              <p>Rent a motorbike for <strong>20RM with fuel</strong>, or arrange a pickup through us before you arrive.</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepLeft}`}>
            <img src="/sign.jpeg" alt="Hostel sign" className={styles.stepImg} />
            <div className={styles.stepText}>
              <span className={styles.stepNum}>04</span>
              <p>Look for our sign on the <strong>left side</strong>. You've made it.</p>
            </div>
          </div>
          <div className={`${styles.step} ${styles.stepRight}`}>
            <img src="/entrance.jpeg" alt="Hostel entrance" className={styles.stepImg} />
            <div className={styles.stepText}>
              <span className={styles.stepNum}>05</span>
              <p><strong>Welcome.</strong> Drop your bag, grab a seat, and make yourself at home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h2>Say Hello.</h2>
        <p>Questions? Pickup request? Just reach out.</p>
        <a href="https://wa.me/60174326029" className={styles.whatsapp}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          +60 17-432 6029
        </a>
      </section>
    </main>
  );
}
