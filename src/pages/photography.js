import React, { useState, useCallback } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import urlBuilder from "@sanity/image-url"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import SEO from "../components/seo"
// import "react-medium-image-zoom/dist/styles.css"

export const query = graphql`
  {
    sanityPage(slug: { current: { eq: "photography" } }) {
      slug {
        current
      }
      title
      _rawGalleryItems(resolveReferences: { maxDepth: 5 })
      galleryItems {
        _key
        galleryImage {
          asset {
            metadata {
              dimensions {
                width
                height
                aspectRatio
              }
            }
            fluid {
              src
            }
          }
        }
        imageDescription
      }
    }
  }
`

export default ({ data, pageContext }) => {
  const pageType = "photography"
  const page = { ...data.sanityPage }

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const urlFor = source =>
    urlBuilder({ projectId: "z8jm8zku", dataset: "production" }).image(source)

  const galleryMap = page._rawGalleryItems.map(image => ({
    src: urlFor(image.galleryImage.asset)
      .auto("format")
      .url(),
    srcSet: [
      // urlFor(image.asset)
      //   .width(1600)
      //   .url() + ` 1600w`,
      urlFor(image.galleryImage.asset)
        .auto("format")
        .width(800)
        .url() + ` 800w`,
      urlFor(image.galleryImage.asset)
        .auto("format")
        .width(400)
        .url() + ` 400w`,
    ],
    sizes: ["(min-width: 800px) 400px, 100vw"],
    width: image.galleryImage.asset.metadata.dimensions.width,
    height: image.galleryImage.asset.metadata.dimensions.height,
    title: image.imageDescription,
    // alt: image.seets.metadata.title,
  }))

  return (
    <Layout pageType={pageType}>
      <SEO title={page.title} description="Photography by Cormac McGloin" />
      <div
        css={{
          // mixBlendMode: "difference",
          background: "#FAF8F6",
          overflow: "hidden",
        }}
      >
        <Gallery
          photos={galleryMap}
          direction="column"
          onClick={openLightbox}
        />

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                styles={{
                  view: () => ({
                    textAlign: "center",
                    "& > img": {
                      display: "initial",
                    },
                  }),
                }}
                currentIndex={currentImage}
                views={galleryMap.map(image => ({
                  ...image,
                  // srcset: image.srcSet,
                  caption: image.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </Layout>
  )
}
