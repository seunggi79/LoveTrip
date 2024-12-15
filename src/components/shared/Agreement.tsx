import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import { MouseEvent } from 'react'
import Flex from './Flex'
import Text from './Text'

function Agreement({ children }: { children: React.ReactNode }) {
  return (
    <Flex as="ul" direction="column" css={agreementCntainerStyles}>
      {children}
    </Flex>
  )
}

function AgreementTitle({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) {
  return (
    <Flex as="li" onClick={(e) => onChange(e, !checked)}>
      <IconCheck checked={checked} />
      <Text bold={true}>{children}</Text>
    </Flex>
  )
}

function AgreementDescription({
  children,
  checked,
  onChange,
  link,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
  link?: string
}) {
  return (
    <Flex as="li">
      <Flex
        onClick={(e) => {
          onChange(e, !checked)
        }}
      >
        <IconCheck checked={checked} />
        <Text typography="t6">{children}</Text>
      </Flex>
      {link != null ? (
        <a href={link} target="_blank" rel="noreferrer">
          <Text typography="t6">링크</Text>
        </a>
      ) : null}
    </Flex>
  )
}

Agreement.Title = AgreementTitle
Agreement.Description = AgreementDescription

function IconCheck({ checked }: { checked: boolean }) {
  return (
    <svg height="20px" version="1.1" viewBox="0 0 18 15" width="20px">
      <title />
      <desc />
      <defs />
      <g
        fill="none"
        fill-rule="evenodd"
        id="Page-1"
        stroke="none"
        stroke-width="1"
      >
        <g
          fill={checked ? colors.blue : '#000000'}
          id="Core"
          transform="translate(-423.000000, -47.000000)"
        >
          <g id="check" transform="translate(423.000000, 47.500000)">
            <path
              d="M6,10.2 L1.8,6 L0.4,7.4 L6,13 L18,1 L16.6,-0.4 L6,10.2 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

const agreementCntainerStyles = css`
  padding: 24px;
  & li {
    cursor: pointer;
  }
`

export default Agreement
