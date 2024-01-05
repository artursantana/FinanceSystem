import * as C from './style'

type Props = {
    title: string
    value: number
    color?: string
}

const Index = ({title, value, color}: Props) => {
  return (
    <C.Container>
        <C.Title>{title}</C.Title>
        <C.Info cole={color}>€{value}</C.Info>
    </C.Container>
  )
}

export default Index
