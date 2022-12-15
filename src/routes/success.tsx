import { Box } from '../components/box'

export async function loader() {
  return null
}

export default function Address() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box>
        <h2>Pedido realizado com sucesso!</h2>
        <img
          src="https://media.tenor.com/6xwjsmMIAIoAAAAd/happy-happy-dog.gif"
          alt="Imagem sorrindo"
          width="400"
        />
      </Box>
    </div>
  )
}
