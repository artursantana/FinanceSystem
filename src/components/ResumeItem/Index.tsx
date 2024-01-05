import * as C from './style'

type Props = {
    title: string
    value: number
}

const Index = ({title, value}: Props) => {
  return (
    <C.Container>
        <C.Title>{title}</C.Title>
        <C.Info>€ {value}</C.Info>
    </C.Container>
  )
}

export default Index
