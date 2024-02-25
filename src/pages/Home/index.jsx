import './style'
import { Brand, Container, Content, Menu, NewNote, Search } from './style'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'

import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" $isactive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: 'React',
              tags: [
                { id: '1', name: 'react' },
                { id: '2', name: 'rocketseat' },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
