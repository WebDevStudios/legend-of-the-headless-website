import Head from 'next/head'
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
  Slide
} from 'pure-react-carousel'

export default function Index({slides}) {
  // Get total number of slides.
  const totalSlides = slides.length

  return (
    <>
      <Head>
        <title>The Legend of the Headless Website from WebDevStudios</title>
        <meta
          name="description"
          content="Join us as we delve into the (not so spooky) Legend of the Headless WordPress Website! This fun event is geared towards anyone interested in learning more about the benefits of a Headless/Decoupled WordPress setup!"
        ></meta>
      </Head>
      <main className="container">
        <CarouselProvider
          infinite={true}
          interval={3000}
          isIntrinsicHeight={true}
          lockOnWindowScroll={true}
          naturalSlideHeight={1920}
          naturalSlideWidth={1080}
          totalSlides={totalSlides}
          visibleSlides={1}
        >
          <Slider>
            {slides.map((slide, index) => (
              <Slide key={index} index={index}>
                <div
                  dangerouslySetInnerHTML={{__html: slide?.content?.rendered}}
                />
                <div className="text-center">
                  {index + 1} of {totalSlides}
                </div>
              </Slide>
            ))}
          </Slider>

          <navigation className="grid grid-cols-2 pt-4">
            <ButtonBack className="text-left">
              <span className="sr-only">Previous</span>
              <i className="arrow left" />
            </ButtonBack>
            <ButtonNext className="text-right">
              <span className="sr-only">Next</span>
              <i className="arrow right" />
            </ButtonNext>
          </navigation>
        </CarouselProvider>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://legend-headless.wdslab.com/wp-json/wp/v2/slides?per_page=100&order=asc`
  )
  const slides = await res.json()

  return {props: {slides}, revalidate: 300}
}
