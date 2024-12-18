import { css } from '@emotion/react'
import Flex from './Flex'
import Skeleton from './Skeleton'
import Spacing from './Spacing'
import Text from './Text'

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onclick?: () => void
  as?: 'div' | 'li'
}

function ListRow({
  as = 'li',
  left,
  contents,
  right,
  withArrow,
  onclick,
}: ListRowProps) {
  return (
    <Flex as={as} css={listRowContainerStyles} onClick={onclick} align="center">
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentsStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <IconArrowRight /> : null}
    </Flex>
  )
}

const listRowContainerStyles = css`
  padding: 10px 40px;
`

const listRowLeftStyles = css`
  margin-right: 14px;
`

const listRowContentsStyles = css`
  flex: 1;
`

function ListRowTexts({
  title,
  subTitle,
}: {
  title: React.ReactNode
  subTitle: React.ReactNode
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

function ListRowSkeleton() {
  return (
    <Flex as="li" css={listRowContainerStyles} align="center">
      <Flex css={listRowLeftStyles}></Flex>
      <Flex css={listRowContentsStyles}>
        <ListRow.Texts
          title={
            <>
              <Skeleton width={67} height={23} />
              <Spacing size={2} />
            </>
          }
          subTitle={<Skeleton width={85} height={20} />}
        />
      </Flex>
      <IconArrowRight />
    </Flex>
  )
}

function IconArrowRight() {
  return (
    <svg
      height={20}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width={20}
    >
      <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 " />
    </svg>
  )
}

ListRow.Texts = ListRowTexts
ListRow.Skeleton = ListRowSkeleton

export default ListRow
