import { v4 as uuidv4 } from 'uuid';
export default function Filter({ filter }) {
  const inputId = uuidv4();
  return (
    <>
      <h3>Find contact by name</h3>
      <input type="text" id={inputId} name="filter" onChange={filter} />
    </>
  );
}
