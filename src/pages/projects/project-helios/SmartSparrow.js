import backgroundHelios from 'assets/helios-altair.jpg';
import imageHelios from 'assets/helios-sim-ss.png';
import imageHelios_2 from 'assets/helios-ss.png';
import videoHelios from 'assets/helios-altair-video.mp4';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import bgHeliosAltair from 'assets/helios-altair-video-bg.avif';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';
import heliosRocket from 'assets/helios-altair-rocket.jpg';

const title = 'Project Helios';
const description =
  "I led Project Helios in FOSS Hack 3.0, India's largest Free and Open Source hackathon, where we achieved victory and earned a 1 Lakh Rupees cash prize.";

const roles = [
  '6 dof Flight Simulator',
  'Custom Motor Data',
  'Flight Tested Accuracy',
  'Wind Generators',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.8 : 0.8}
          src={backgroundHelios}
          srcSet={`${backgroundHelios.src} 1080w, ${backgroundHelios.src} 2160w`}
          placeholder={backgroundHelios}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.github.com/ronanmarkdsouza/Helios"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={[imageHelios, imageHelios]}
              placeholder={imageHelios}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              The need for a simulator arises from the constraints of testing permissions
              in India, coupled with the high expenses of testing high power rockets. A
              simulation report is essential to comprehend the flight's success and
              effectively map the landing site for streamlined rocket recovery efforts.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={[imageHelios_2, imageHelios_2]}
              placeholder={imageHelios_2}
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Simulator Design</ProjectSectionHeading>
              <ProjectSectionText>
                This type of model is essential for predicting the behavior of rockets
                during flight and optimizing their performance. The model takes into
                account factors such as air density, wind speed, and turbulence to
                simulate the rocket's trajectory accurately.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.8}
            backgroundElement={
              <Image
                srcSet={[bgHeliosAltair, bgHeliosAltair]}
                placeholder={bgHeliosAltair}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>
                    Spaceport America Cup 2023
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Project Helios played a crucial role in simulating the trajectory for
                    Project Altair during Spaceport America Cup 2023. The simulator proved
                    its practical utility by facilitating the engineering of a high power
                    rocket, achieving an impressive apogee of 10,331 feet.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoHelios, width: 1280, opacity: 0.8 },
                  { src: videoHelios, width: 2560 },
                ]}
                placeholder={videoHelios}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            {/* <ProjectTextRow>
              <ProjectSectionHeading>Encouraging adaptivity</ProjectSectionHeading>
              <ProjectSectionText>
                A major part of solving for collaboration was being able to visualize the
                learner experience in the editor. This was especially beneficial for
                subject matter experts and instructors need to review and give feedback on
                the higher level structure without having to dig through all of the
                adaptivity scenarios screen by screen.
              </ProjectSectionText>
            </ProjectTextRow> */}
            <Image
              raised
              key={themeId}
              srcSet={[heliosRocket, heliosRocket]}
              placeholder={heliosRocket}
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Project Helios was one of the best projects at{' '}
                <Link href="https://forum.fossunited.org/t/foss-hack-3-0-results/1882">
                  FOSS Hack 3.0
                </Link>{' '}
                and we a cash prize of 1,00,000 INR. The project was also used to predict
                the flight of project Altair that flew at{' '}
                <Link href="https://spaceportamericacup.com/">
                  Spaceport America Cup 2023{' '}
                </Link>
                on the 24th of June 2023.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
