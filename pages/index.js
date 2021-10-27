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
            </Slide>
          ))}
        </Slider>

        <navigation className="grid grid-cols-2 text-4xl mt-12">
          <ButtonBack className="text-left">
            <span className="sr-only">Previous</span>
            &#10508;
          </ButtonBack>
          <ButtonNext className="text-right">
            <span className="sr-only">Next</span>
            &#10509;
          </ButtonNext>
        </navigation>
      </CarouselProvider>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://legend-headless.wdslab.com/wp-json/wp/v2/slides?per_page=100&order=asc`
  )
  const slides = await res.json()

  return {props: {slides}, revalidate: 300}
}
