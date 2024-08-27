import { ReactNode } from "react"
import { Container } from "./styles"
import { theme } from "../../../../stitches.config"
import { ComponentProps } from "@stitches/react"

type ActionIconProps = ComponentProps<typeof Container> & {
  icon: ReactNode
  iconColor: keyof typeof theme.colors
}

export const ActionIcon = ({ icon, iconColor, ...props }: ActionIconProps) => {
  return (
    <Container {...props} css={{
      color: `$${iconColor}`
    }}>
      {icon}
    </Container>
  )
}