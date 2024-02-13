"use client";
import { useState } from "react";
import Button from "../components/Button";

const { default: Header } = require("../components/Header");

const analysis = () => {
  const [file, setFile] = useState("");
  const [folder, setFolder] = useState("H2");
  const [nonefile, setNonefile] = useState(false);
  const [searchedFiles, setSearchedFiles] = useState([]);

  return (
    <Header>
      <div
        className="flex flex-row mt-16 mx-auto w-4/5 space-x-3"
        style={{ height: "60vh" }}
      >
        <div className="basis-2/5 shadow-lg rounded-md text-center p-6 bg-white ">
          <h1 className="font-medium text-3xl pb-2 border-b-2 ">File Upload</h1>
          <p className="pt-2 text-lg">파일 선택 후, 업로드 버튼 클릭</p>
          <form
            className="flex items-center justify-center h-5/6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="file"
              onChange={(e) => setFile(e.target.value)}
            ></input>
            <Button file={file} setNonefile={setNonefile}>
              UPLOAD
            </Button>
          </form>
          {nonefile && <p>파일을 선택해주세요</p>}
        </div>
        <div className="basis-3/5 shadow-lg rounded-md text-center relative p-6 bg-white">
          <h1 className="font-medium text-3xl pb-2 border-b-2">
            File List & DownLoad
          </h1>
          <p className="pt-2 text-lg">파일 검색 후, 원하는 파일 다운로드</p>
          <div className="h-5/6">
            <div className="text-left flex w-10/12 h-full items-center">
              <div className="w-6/12 h-full flex items-center	">
                <select
                  className="p-2 px-3 border mr-3 text-left"
                  onChange={(e) => setFolder(e.target.value)}
                >
                  <option value="H2">H2</option>
                  <option value="H4">H4</option>
                  <option value="H5">H5</option>
                </select>
                <Button folder={folder} setSearchedFiles={setSearchedFiles}>
                  SEARCH
                </Button>
              </div>
              <div className="w-full text-center">
                {searchedFiles ? (
                  searchedFiles.map((item) => <li>{item.key}</li>)
                ) : (
                  <p className="text-slate-300 italic text-lg">
                    Search Your List!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default analysis;
