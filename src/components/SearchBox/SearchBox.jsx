export const SearchBox = ({ onSubmit }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
