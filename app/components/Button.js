import commuteAxios from "../api/axios";

const Button = ({ children, file, folder, setNonefile, setSearchedFiles }) => {
  const clickHandler = () => {
    if (children === "UPLOAD") {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        commuteAxios
          .post("/file/upload", formData)
          .then((res) => setSearchedFiles(res.data))
          .catch(console.log("실패"));
      } else {
        setNonefile((prev) => !prev);
      }
    } else {
      if (folder) {
        commuteAxios
          .get(`/file/search/${folder}`)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      }
    }
  };
  return (
    <button
      className="align-middle rounded-3xl bg-sky-500 text-white px-5 py-2"
      type="submit"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
