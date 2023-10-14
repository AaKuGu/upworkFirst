import React, { useMemo, useRef, useState } from "react";
import Title from "../../../Title";
import { designsInfo } from "@/constants/constant";
import { GrView } from "react-icons/gr";
import Model from "@/sections/dashboard/model/Model";
import Image from "next/image";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CreateADesign = ({ title }) => {
  const [uploadedDesignImage, setUploadedDesignImage] = useState();
  const [uploadDownloadableFiles, setUploadDownloadableFiles] = useState();
  const [viewButtonClicked, setViewButtonClicked] = useState(false);
  const [designName, setDesignName] = useState();
  const [designDesc, setDesignDesc] = useState();
  // const []

  // console.log(
  //   "🚀 ~ file: CreateADesign.jsx:8 ~ CreateADesign ~ uploadedDesignImage:",
  //   uploadedDesignImage
  // );
  console.log(
    "🚀 ~ file: CreateADesign.jsx:10 ~ CreateADesign ~ uploadedDesignImage:",
    uploadedDesignImage
  );
  console.log(
    "🚀 ~ file: CreateADesign.jsx:12 ~ CreateADesign ~ uploadDownloadableFiles:",
    uploadDownloadableFiles
  );

  const dispatch = useDispatch();
  const designImageInputRef = useRef();
  const downloadableFilesInputRef = useRef();

  // console.log(
  //   "🚀 ~ file: CreateADesign.jsx:7 ~ CreateADesign ~ noOfCreatedDesginsTillNow:",
  //   noOfCreatedDesginsTillNow
  // );

  const uploadClickButtonHandler = (refValue) => {
    refValue.current.click();
  };

  const uploadDesignImageHandler = (e) => {
    setUploadedDesignImage(e.target.files[0]);
  };

  const uploadDownloadableFilesHandler = (e) => {
    const files = e.target.files;
    setUploadDownloadableFiles(Array.from(files));
    // setUploadDownloadableFiles(e.target.files);
  };

  const uploadForReviewHandler = () => {
    dispatch({
      type: "createADesignData_action",
      payload: {
        name: designName,
        desc: designDesc,
        designImage: "",
        designFiles: "",
      },
    });

    toast.success("You can expect 1 to 2 days of review", {
      duration: 5000,
    });
    toast.success("Successfully uploaded for review", {
      duration: 4000,
    });

    setDesignDesc("");
    setDesignName("");
    setUploadDownloadableFiles();
    setUploadedDesignImage();
  };

  // const uploadDesignButtonClickHandler = () => {
  //   designImageInputRef.current.click();
  // };

  const createADesignData_selector = useSelector((state) => {
    const { createADesignData_reducer } = state;
    return createADesignData_reducer;
  });
  // console.log(
  //   "🚀 ~ file: CreateADesign.jsx:67 ~ constcreateADesignData_selector=useSelector ~ createADesignData_selector:",
  //   createADesignData_selector
  // );

  const noOfCreatedDesginsTillNow = useMemo(() => {
    const _length = designsInfo.length;
    return _length;
  }, [designsInfo]);

  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 p-3">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-[85%] flex items-center justify-start py-5 gap-10 overflow-y-auto border-2 border-gray-400 flex-col bg-blue-500 `}
      >
        <div
          aria-label="design no container"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 mb-5`}
        >
          Design No : <span> {noOfCreatedDesginsTillNow + 1} </span>
        </div>
        <div
          aria-label="name of the design container"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 `}
        >
          <label htmlFor="designName">Give a name : </label>
          <input
            type="text"
            value={designName}
            name="designName"
            id="designName"
            onChange={(e) => {
              setDesignName(e.target.value);
            }}
          />
        </div>
        <div
          aria-label="upload design container"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 `}
        >
          <div
            aria-label="upload design button"
            className={`${""} w-[200px] h-[100px] rounded-lg flex items-center justify-center gap-5 bg-red-500 cursor-pointer`}
            onClick={() => uploadClickButtonHandler(designImageInputRef)}
          >
            Upload
          </div>
          <input
            type="file"
            name="designImage"
            id="designImage"
            ref={designImageInputRef}
            className="hidden"
            onChange={(e) => uploadDesignImageHandler(e)}
          />
          {uploadedDesignImage && (
            <button
              role="view your uploaded design button"
              className={`${""} border-2 px-5 py-2 flex items-center justify-center `}
              onClick={() => {
                setViewButtonClicked(true);
              }}
            >
              View <GrView />
            </button>
          )}
          {viewButtonClicked && (
            <Model action={setViewButtonClicked}>
              <div
                aria-label="image container"
                className={`${""} w-auto h-auto p-3 flex items-center justify-center gap-5 border-[1px] border-gray-600`}
              >
                <Image
                  src={URL.createObjectURL(uploadedDesignImage)}
                  width={400}
                  height={400}
                />
              </div>
            </Model>
          )}
        </div>

        <div
          aria-label="upload design container"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 bg-green-500`}
        >
          {/* <label htmlFor="name">Give a name : </label> */}
          <textarea
            name="designDesc"
            id="designDesc"
            cols="30"
            rows="10"
            value={designDesc}
            placeholder="Write Your Description"
            className="outline-none p-3 text-xl "
            onChange={(e) => {
              setDesignDesc(e.target.value);
            }}
          />
        </div>

        <div
          aria-label="upload files container"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 `}
        >
          <div
            aria-label="upload files button"
            className={`${""} w-[200px] h-[50px] rounded-lg flex items-center justify-center gap-5 border-2 border-gray-600 cursor-pointer`}
            onClick={() => uploadClickButtonHandler(downloadableFilesInputRef)}
          >
            Upload Your Files
          </div>
          <input
            type="file"
            name="designImage"
            id="designImage"
            ref={downloadableFilesInputRef}
            className="hidden"
            onChange={(e) => uploadDownloadableFilesHandler(e)}
            multiple
          />
          <div
            aria-label="names"
            className={`${""} w-[200px] h-auto flex items-center justify-center gap-5 flex-col`}
          >
            {uploadDownloadableFiles &&
              uploadDownloadableFiles.map((file, i) => {
                return <div className="truncate w-[130px]">{file.name}</div>;
              })}
          </div>
        </div>

        <button
          role="upload for review button"
          className={`${""} border-2 px-5 py-2 hover:bg-gray-300`}
          onClick={uploadForReviewHandler}
        >
          Upload For Review
        </button>
      </div>
    </div>
  );
};

export default CreateADesign;
