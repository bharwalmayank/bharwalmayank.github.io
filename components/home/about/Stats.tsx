import { Reveal } from "@/components/utils/Reveal";
import { FaBrain, FaCode, FaToolbox } from "react-icons/fa";
import styles from "./stats.module.scss";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <FaCode size="2.4rem" color="var(--brand)" />
            <span>languages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">C/C++</span>
            <span className="chip">Rust</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Java</span>
            <span className="chip">SQL</span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <FaBrain size="2.4rem" color="var(--brand)" />
            <span>frameworks & libraries</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">PyTorch</span>
            <span className="chip">FastAPI</span>
            <span className="chip">React</span>
            <span className="chip">Node.js</span>
            <span className="chip">OpenCV</span>
            <span className="chip">PostgreSQL</span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <FaToolbox size="2.4rem" color="var(--brand)" />
            <span>tools & infrastructure</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Docker</span>
            <span className="chip">Kubernetes</span>
            <span className="chip">AWS</span>
            <span className="chip">Linux</span>
            <span className="chip">Git</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
