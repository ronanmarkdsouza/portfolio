import HeliosTexture from 'assets/helios-sim-ss.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import mre_1 from 'assets/mre-ss-1.jpg';
import mre_2 from 'assets/mre-ss-2.jpg';

const disciplines = ['Machine Learning', 'AI', 'Deep Learning', 'Rocketry', 'Developer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta title="Data Science" description="Portfolio website of Ronan Mark D'souza" />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Project Helios"
        description="An open-source rocket flight simulator"
        buttonText="View project"
        buttonLink="/projects/project-helios"
        model={{
          type: 'laptop',
          alt: 'Project Helios Demo',
          textures: [
            {
              srcSet: [HeliosTexture, HeliosTexture],
              placeholder: HeliosTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Movie Recommendation Engine"
        description="A movie recommendation Engine based on popular and similar movies."
        buttonText="View project"
        buttonLink="/projects/MRE"
        model={{
          type: 'phone',
          alt: 'MRE screen',
          textures: [
            {
              srcSet: [mre_1, mre_1],
              placeholder: mre_1,
            },
            {
              srcSet: [mre_2, mre_2],
              placeholder: mre_2,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
