import React, { useMemo, useRef, useState } from "react";
import Title from "../../../Title";
import { designsInfo } from "@/constants/constant";
import { GrDocumentZip, GrView } from "react-icons/gr";
import Model from "@/sections/dashboard/model/Model";
import Image from "next/image";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { GoFileZip } from "react-icons/gr";
import { MdPreview } from "react-icons/md";

const CreateADesign = ({ title }) => {
  const [uploadedDesignImage, setUploadedDesignImage] = useState();
  const [uploadDownloadableFiles, setUploadDownloadableFiles] = useState();
  const [viewButtonClicked, setViewButtonClicked] = useState(false);
  const [category, setCategory] = useState();
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

  const labelStyles = `text-gray-600 font-bold text-xl`;

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
        category: category,
        desc: designDesc,
        designImage: "kdsfdlkske",
        designFiles: "ksjdksefkj",
        userId: loggedInUserId_selector,
      },
    });

    toast.success("You can expect 1 to 2 days of review", {
      duration: 5000,
    });
    toast.success("Successfully uploaded for review", {
      duration: 4000,
    });

    setDesignDesc("");
    setCategory("");
    setUploadDownloadableFiles();
    setUploadedDesignImage();
  };

  // const uploadDesignButtonClickHandler = () => {
  //   designImageInputRef.current.click();
  // };

  const loggedInUserId_selector = useSelector((state) => {
    const { loggedInUserId_reducer } = state;
    return loggedInUserId_reducer;
  });

  const createADesignData_selector = useSelector((state) => {
    const { createADesignData_reducer } = state;
    return createADesignData_reducer;
  });
  console.log(
    "🚀 ~ file: CreateADesign.jsx:86 ~ constcreateADesignData_selector=useSelector ~ createADesignData_selector:",
    createADesignData_selector
  );

  // const designsInfo_selector = useSelector((state) => {
  //   const { designsInfo_reducer } = state;
  //   return designsInfo_reducer;
  // });

  // const noOfCreatedDesginsTillNow = useMemo(() => {
  //   const _length = designsInfo_selector.length;
  //   return _length;
  // }, [designsInfo]);

  return (
    <div className="w-full h-full flex items-center justify-center gap-2 p-3">
      <div
        aria-label="right side"
        className={`${""} w-[40%] h-full flex items-center justify-center gap-5 flex-col bg-green-500 rounded-lg relative shadow-lg `}
        style={{ backgroundImage: "url('/signInImage.png')" }}
      >
        {/* <div
          aria-label="grayBackground"
          className={`${""} w-full h-full absolute top-0 left-0 bg-black opacity-50`}
        ></div> */}
        <div
          aria-label="overlay text container"
          className={`${""}  w-full h-full absolute top-0 left-0 flex items-center justify-center gap-5 flex-col `}
        >
          <div
            aria-label="welcome text"
            className={`${""} w-full h-fit flex items-center justify-center gap-5 text-3xl font-bold 
      bg-gradient-to-r from-red-500 via-purple-400 to-blue-400 bg-clip-text  text-transparent`}
          >
            Create Your Design
          </div>
          <div aria-label="" className={`${""} text-gray-200  text-md`}>
            Unleash Your Creative Vision
          </div>
        </div>
      </div>
      <div
        aria-label="basic form container"
        className={`${""} w-[400px] h-full flex items-center justify-center gap-5 flex-col shadow-lg border-2 border-purple-200 rounded-lg px-5 py-2 `}
      >
        <Title title={title} />
        <div
          aria-label="designcard map container"
          className={`${""} w-full h-[85%] flex items-center justify-start py-5 gap-10 overflow-y-auto  flex-col px-5`}
        >
          <div
            aria-label="name of the design container"
            className={`${""} w-full h-auto flex items-center justify-center gap-5 shadow-lg py-3 flex-col border-[1px]`}
          >
            <label htmlFor="designName" className={labelStyles}>
              Give A Title
            </label>
            <input
              type="text"
              value={category}
              name="category"
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="border-[1px] border-gray-400 rounded-lg px-5 py-1 outline-none "
            />
          </div>
          {/* <div
          aria-label="design no container"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 mb-5`}
        >
          Design No : <span> {noOfCreatedDesginsTillNow + 1} </span>
        </div> */}

          <div
            aria-label="upload design container"
            className={`${""} shadow-lg py-3 w-full h-auto flex items-center justify-center gap-5 flex-col border-[1px] `}
          >
            <div
              aria-label="upload YOur Design label"
              className={`${labelStyles} `}
            >
              Upload Design Image
            </div>
            <div
              aria-label="upload design button"
              className={`${""} w-[200px] h-[50px]  shadow-lg gap-3 text-purple-600 cursor-pointer rounded-lg flex items-center justify-center font-bold `}
              onClick={() => uploadClickButtonHandler(designImageInputRef)}
            >
              <AiOutlineCloudUpload />
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
                className={`${""} underline text-blue-700 flex items-center justify-center w-auto h-auto gap-1  `}
                onClick={() => {
                  setViewButtonClicked(true);
                }}
              >
                View
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
            aria-label="name of the design container"
            className={`${""} w-full h-auto flex items-center justify-center gap-5 shadow-lg py-3 flex-col border-[1px]`}
          >
            <label htmlFor="designName" className={labelStyles}>
              Category :{" "}
            </label>
            <input
              type="text"
              value={category}
              name="category"
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="border-[1px] border-gray-400 rounded-lg px-5 py-1 outline-none "
            />
          </div>

          <div
            aria-label="upload design container"
            className={`${""} w-full h-auto flex items-center justify-center gap-5 shadow-lg py-3 flex-col border-[1px] `}
          >
            {/* <label htmlFor="name">Give a name : </label> */}
            <label htmlFor="designName" className={labelStyles}>
              Description :{" "}
            </label>
            <textarea
              name="designDesc"
              id="designDesc"
              cols="26"
              rows="10"
              value={designDesc}
              placeholder=""
              className="outline-none p-3 text-xl border-[1px] border-gray-400 "
              onChange={(e) => {
                setDesignDesc(e.target.value);
              }}
            />
          </div>

          <div
            aria-label="upload files container"
            className={`${""}  w-full h-auto flex items-center justify-center gap-5 shadow-lg py-3 flex-col border-[1px]`}
          >
            <div
              aria-label="upload files button"
              className={`${""} w-[200px] h-[50px]  shadow-lg gap-3 text-purple-600 cursor-pointer rounded-lg flex items-center justify-center font-bold `}
              onClick={() =>
                uploadClickButtonHandler(downloadableFilesInputRef)
              }
            >
              <GrDocumentZip />
              Upload Zip File
            </div>
            <input
              type="file"
              name="designImage"
              id="designImage"
              ref={downloadableFilesInputRef}
              className="hidden"
              onChange={(e) => uploadDownloadableFilesHandler(e)}
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

          {/* <div
            aria-label=""
            className={`${""} w-full h-auto flex items-center justify-center gap-5 shadow-lg py-3 flex-col border-[1px]`}
          > */}
          <button
            role="upload for review button"
            className={`${""}  shadow-lg border-b-2 border-gray-300 rounded-lg   font-bold w-auto px-5 py-2 duration-600 flex items-center justify-center gap-3 bg-white text-white`}
            style={{ backgroundImage: "url('/signInImage.png')" }}
            onClick={uploadForReviewHandler}
          >
            <MdPreview />
            Upload For Review
          </button>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default CreateADesign;
