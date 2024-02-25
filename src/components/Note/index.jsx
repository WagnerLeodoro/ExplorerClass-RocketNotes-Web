import PropTypes from 'prop-types'
import { Tag } from '../Tag'
import { Container } from './style'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}

Note.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
}
