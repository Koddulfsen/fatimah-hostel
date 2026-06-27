import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div className={styles.aboutWrapper}>
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h2 className={styles.aboutH2}>Come Chill<span style={{ color: '#FF6B35' }}>.</span></h2>
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
      </div>

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
        <a href="https://wa.me/60174326029" className={styles.whatsapp}>WhatsApp us</a>
      </section>
    </main>
  );
}
