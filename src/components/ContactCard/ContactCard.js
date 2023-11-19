export const ContactCard = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div>
      <span>{name}: </span>
      <span>{number} </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
