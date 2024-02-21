"use client";
import { useState } from "react";
import Button from "../components/Button";
import commuteAxios from "../api/axios";

const { default: Header } = require("../components/Header");

const analysis = () => {
  const [file, setFile] = useState(null);
  const [folder, setFolder] = useState("H2");
  const [searchedFiles, setSearchedFiles] = useState(null);
  const [uploadState, setUploadState] = useState(null);

  const downloadHandler = async (file) => {
    try {
      const response = await commuteAxios.get(`/file/download/${file}`, {
        responseType: "blob", // 설정된 responseType은 파일 다운로드를 위해 Blob 유형으로 설정됩니다.
      });
      const url = window.URL.createObjectURL(new Blob([response.data])); // 파일 데이터를 Blob으로 변환하여 URL을 생성합니다.
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${file}`); // 다운로드될 파일의 이름과 확장자를 설정합니다.
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error fetching file data:", error);
    }
  };

  return (
    <Header>
      <div
        className="flex flex-row mt-16 mx-auto w-4/5 space-x-3"
        style={{ height: "60vh" }}
      >
        <div className="basis-2/5 shadow-lg rounded-md text-center p-6 bg-white ">
          <h1 className="font-medium text-3xl pb-2 border-b-2 ">File Upload</h1>
          <p className="pt-2 text-lg">파일 선택 후, 업로드 버튼 클릭</p>
          <form className="h-5/6 relative" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center h-full">
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              ></input>
              <Button file={file} setUploadState={setUploadState}>
                UPLOAD
              </Button>
            </div>
            {!file ? (
              <p className="absolute inset-x-0 bottom-16">
                파일을 선택해주세요
              </p>
            ) : (
              uploadState && (
                <p className="absolute inset-x-0 bottom-16">업로드 완료!</p>
              )
            )}
          </form>
        </div>
        <div className="basis-3/5 shadow-lg rounded-md text-center p-6 bg-white">
          <h1 className="font-medium text-3xl pb-2 border-b-2">
            File List & DownLoad
          </h1>
          <p className="pt-2 text-lg">파일 검색 후, 원하는 파일 다운로드</p>
          <div className="h-5/6">
            <div className="text-left flex w-10/12 h-full items-center justify-between">
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
              <div className="w-full">
                {searchedFiles ? (
                  searchedFiles.map((item) => (
                    <ul>
                      <li
                        className="flex justify-between list-disc text-lg my-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.key}{" "}
                        <button onClick={() => downloadHandler(item.key)}>
                          <img className="w-7" src="/download.svg" />
                        </button>
                      </li>
                    </ul>
                  ))
                ) : (
                  <p className="text-slate-300 italic text-lg text-center">
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
