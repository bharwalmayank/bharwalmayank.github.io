import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Stats } from "./Stats";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="about" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              hey, i&apos;m mayank. i study computer science at the university of toronto, 
              focusing on AI and systems. i build software where real-time engineering 
              meets intelligent machines—from avionics control systems for VTOL rockets 
              to multi-agent LLM research.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              previously, i built full-stack tools at hyundai motors and shipped developer 
              and accessibility software. when i&apos;m not writing code, i&apos;m usually 
              lifting, doing improv comedy, biking, or meditating.
            </p>
          </Reveal>

          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>continue the conversation:</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
