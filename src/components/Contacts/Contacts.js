import PropTypes from 'prop-types';

export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:<span>{number}</span> <button type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.array,
};
