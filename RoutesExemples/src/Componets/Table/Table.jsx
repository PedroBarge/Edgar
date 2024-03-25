/* eslint-disable react/prop-types */
const Table = ({ name, imgLink }) => {
  return (
    <>
      <h3>Name: {name}</h3>
      <img src={imgLink} alt={name} />
    </>
  );
};

export default Table;
