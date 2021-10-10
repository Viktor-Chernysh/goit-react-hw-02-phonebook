import PropTypes from 'prop-types';

export default function Contacts({ contacts, deleteContact }) {
  return (
    <ol>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:<span>{number}</span>{' '}
          <button
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.array,
};
