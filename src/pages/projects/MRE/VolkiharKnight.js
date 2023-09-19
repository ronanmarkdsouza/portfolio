import mreBanner from 'assets/mre-banner.jpg';
import mreLaptop_1 from 'assets/mre-ss-l-1.png';
import mreLaptop_2 from 'assets/mre-ss-l-2.png';
import mreLaptop_3 from 'assets/mre-ss-l-3.png';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
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
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));

const title = 'Movie Recommendation Engine';
const description =
  'Discover a movie recommendation engine trained on the IMDb dataset. Explore popular movies and find similar ones based on your preferences.';
const roles = ['Popular Movies', 'Similar Movies', 'Recommendations', 'IMDb'];

export function VolkiharKnight() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[mreBanner, mreBanner]}
          placeholder={mreBanner}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="GitHub"
          url="https://www.github.com/ronanmarkdsouza/recommender-ronan"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[mreBanner, mreBanner]}
              placeholder={mreBanner}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={mreLaptop_1}
              images={[
                {
                  srcSet: [mreLaptop_1, mreLaptop_1],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wearing the black coloured armor set.',
                },
                {
                  srcSet: [mreLaptop_2, mreLaptop_2],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A close up of the custom gauntlets design.',
                },
                {
                  srcSet: [mreLaptop_3, mreLaptop_3],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wielding a sword and wearing the red coloured armor.',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[mreBanner, mreBanner]}
              placeholder={mreBanner}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Try it out!</ProjectSectionHeading>
              <ProjectSectionText>
                Step into the world of movie magic! A simple yet efficient movie
                recommendation engine. Built using IMDb data, this project suggests
                popular movies and finds similar ones based on your likes. It's a
                delightful fusion of my love for movies and coding, making your film
                choices a breeze. Take a peek and discover movies that match your taste
                effortlessly!
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="https://recommend-ronan.azurewebsites.net"
              >
                View Live Website
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
