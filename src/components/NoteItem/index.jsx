import PropTypes from 'prop-types'
import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './style'

export function NoteItem({ isnew, value, onClick, ...rest }) {
  return (
    <Container isNew={isnew}>
      <input type="text" value={value} readOnly={!isnew} {...rest} />
      <button
        type="button"
        onClick={onClick}
        className={isnew ? 'button-add' : 'button-delete'}
      >
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}

NoteItem.propTypes = {
  isnew: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.func,
}
