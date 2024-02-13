import commuteAxios from "../api/axios";

const List = ({ children, item, folder }) => {
  const [hover, setHover] = useState();

  const hoverHandler = () => {
    setHover((prev) => !prev);
  };

  const downloadHandler = () => {
    if (item) {
      commuteAxios.get(`/file/search/${folder}/${item.key}`);
    }
  };

  return (
    <ul>
      <li onMouseOver={hoverHandler}>
        {children}{" "}
        {hover && <img src="/download.svg" onClick={downloadHandler} />}
      </li>
      ;
    </ul>
  );
};

export default List;
