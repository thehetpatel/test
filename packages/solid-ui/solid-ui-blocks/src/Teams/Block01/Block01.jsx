import React from 'react'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { Container, Box, Flex, css } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import Reveal from '@solid-ui-components/Reveal'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import getImage from '@solid-ui-components/utils/getImage'

const TeamsBlock01 = ({
  content: { container, text, images, buttons, collection }
}) => (
  <Container>
    <Flex
      sx={{
        alignItems: `center`,
        flexDirection: [`column`, null, null, `row`]
      }}
    >
      <Box
        sx={{
          flexBasis: `1/2`,
          textAlign: `center`,
          mr: [null, null, null, 5]
        }}
      >
        <Reveal effect='fadeInDown'>
          {images?.[0]?.src && (
            <>
              <Img image={getImage(images[0].src)} alt={images?.[0]?.alt} />
              <Divider space={3} />
            </>
          )}
          <ContentText content={text} />
        </Reveal>
      </Box>
      <Box
        sx={{
          flexBasis: `1/2`,
          mt: [4, null, null, 0],
          ml: [null, null, null, 5]
        }}
      >
        <Reveal effect='fadeInLeft'>
          <Box
            content={container}
            variant='cards.paper'
            sx={{
              textAlign: `center`,
              mx: `auto`,
              background: container?.bg
            }}
          >
            <Divider space={2} />
            <ContentText content={text} variant='h5' />
            <Divider space={1} />
            <Flex sx={{ flexWrap: `wrap`, justifyContent: `center` }}>
              {collection?.map(({ text, avatar }, index) => (
                <Reveal
                  effect='fadeInRotate'
                  delay={1 + 0.2 * (index + 1)}
                  css={css({ p: 2, boxSizing: 'content-box' })}
                >
                  <Img
                    image={getImage(avatar?.src)}
                    alt={avatar?.alt}
                    css={css({
                      size: 100,
                      mx: `auto`,
                      img: {
                        bg: `omegaLight`,
                        borderRadius: `full`,
                        p: 1
                      }
                    })}
                  />
                  {text?.[0] && (
                    <Reveal delay={1.6 + 0.2 * (index + 1)}>
                      <ContentText
                        content={text?.[0]}
                        variant='badges.tag'
                        sx={{ position: `relative`, zIndex: 2, mt: -4 }}
                      />
                    </Reveal>
                  )}
                </Reveal>
              ))}
            </Flex>
            {buttons && (
              <>
                <Divider space={3} />
                <ContentButtons content={buttons} />
              </>
            )}
            <Divider space={2} />
          </Box>
        </Reveal>
      </Box>
    </Flex>
  </Container>
)

export default WithDefaultContent(TeamsBlock01)
