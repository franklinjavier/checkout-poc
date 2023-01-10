import { Box } from '../components/box'
import { Container } from '../components/container'

export async function loader() {
  return null
}

export default function Address() {
  return (
    <Box>
      <h2 className="font-medium text-xl mb-6">🌈 Pedido realizado com sucesso!</h2>
      <img
        src="https://media.tenor.com/6xwjsmMIAIoAAAAd/happy-happy-dog.gif"
        alt="Imagem sorrindo"
        width="400"
      />
    </Box>
  )
}
