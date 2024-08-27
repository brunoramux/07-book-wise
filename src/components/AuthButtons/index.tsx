import Image from "next/image"
import { AuthButton, Container } from "./styles"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

type AuthButtonsProps = {
  canGuest?: boolean
  callbackUrl?: string
}

export const AuthButtons = ({ canGuest, callbackUrl = "/" }: AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if(!provider) {
      router.push(callbackUrl)
      return 
    }
    signIn(provider, {
      callbackUrl
    })
  }

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn("google")}>
        <Image src="/images/icons/google.svg" alt="Google Logo" width={30} height={30} />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn("github")}>
        <Image src="/images/icons/github.svg" alt="Github Logo" width={30} height={30} />
        Entrar com Github
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <Image src="/images/icons/rocket.svg" alt="Rocket Icon" width={30} height={30} />
          Entrar como visitante
        </AuthButton>
      )}
    </Container>
  )
}