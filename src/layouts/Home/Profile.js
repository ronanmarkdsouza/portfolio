import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/about-me-2.jpeg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/about-me-2.jpeg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Ronan, currently I live in Sydney working as a senior product designer at{' '}
      <Link href="https://www.qwilr.com">Qwilr</Link>. My projects include UX design, UI
      animations, and icon illustration. Being comfortable with code allows me to rapidly
      prototype and validate experiences. If you’re interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to practice Brazilian Jiu Jitsu, play video games, and{' '}
      <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line.
    </Text> */}
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Ronan, currently enrolled in the Data Science and Engineering Bachelor's program
      at Manipal Institute of Technology. I've been involved with the{' '}
      <Link href="https://thrustmit.in">student rocketry team</Link>, working on
      high-power rocket projects and leading the avionics team for a year. My passion lies
      in both rocketry and data science, with a keen interest in machine learning and deep
      learning. Many of my projects revolve around these exciting fields.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my free time, I hit the gym and shoot some hoops on the basketball court. I'm a
      fan of crime documentaries and love getting lost in Sherlock-style detective
      stories.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in MV Seminar Hall"
                />
                {/* <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg> */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
