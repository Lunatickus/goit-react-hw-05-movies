export const SearchBox = ({ onSubmit }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <input type="text" name="query" required />
      <button type="submit">Search</button>
    </form>
  );
};
