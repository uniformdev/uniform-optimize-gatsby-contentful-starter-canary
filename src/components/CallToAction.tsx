import React from "react"
import { WaveSplitter } from "./WaveSplitter"
import { graphql } from "gatsby"

export const CallToActionComponent: React.FC<any> = ({
  heading,
  subheading,
  buttonImage,
  buttonLink,
  buttonText,
}) => {
  return (
    <>
      <WaveSplitter />
      <section className="container mx-auto text-center py-6 pb-16">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          {heading}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <h2 className="my-4 text-3xl leading-tight">{subheading}</h2>
        <br />
        {buttonLink && buttonImage && (
          <button
            className="mx-auto mt-3 lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            name="call to action"
            onClick={() => window.open(buttonLink)}
          >
            <img src={buttonImage.fields.file.url} alt="button image" />
          </button>
        )}
        {buttonLink && !buttonImage && (
          <a
            href={buttonLink}
            target="_new"
            className="mx-auto mt-3 lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            {buttonText}
          </a>
        )}
      </section>
    </>
  )
}

export const query = graphql`
  fragment callToAction on ContentfulCallToAction {
    id
    sys {
      contentType {
        sys {
          id
          linkType
          type
        }
      }
      revision
      type
    }
    buttonLink
    buttonText
    heading
    subheading
  }
`
