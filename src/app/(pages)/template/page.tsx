"use client";
import MainButton from "@/components/common/mainButton";
import MainCard from "@/components/common/main-card/mainCard";
import MainField from "@/components/common/mainField";
import { Formik, Form } from "formik";
import { FaArrowRightLong } from "react-icons/fa6";
import ImageMob from "../../../../public/images/9-16.jpg";
import ImageSquare from "../../../../public/images/1-1.jpg";
import ImageVideo from "../../../../public/images/16-9.jpg";
import Masonry from "react-masonry-css";

const Template = () => {
  // Mocked array of card data
  const cardsData = [
    {
      id: 1,
      cardRatio: "aspect-[9/16]",
      cardTitle: "Mobile Nature",
      cardCategories: [
        { path: "/cat", label: "mobile" },
        { path: "/cat", label: "nature" },
      ],
      cardPath: "/image1",
      cardImage: ImageMob,
    },
    {
      id: 2,
      cardRatio: "aspect-[1/1]",
      cardTitle: "Square Art",
      cardCategories: [
        { path: "/cat", label: "art" },
        { path: "/cat", label: "design" },
      ],
      cardPath: "/image2",
      cardImage: ImageSquare,
    },
    {
      id: 2,
      cardRatio: "aspect-[1/1]",
      cardTitle: "Square Art",
      cardCategories: [
        { path: "/cat", label: "art" },
        { path: "/cat", label: "design" },
      ],
      cardPath: "/image2",
      cardImage: ImageSquare,
    },
    {
      id: 3,
      cardRatio: "aspect-[16/9]",
      cardTitle: "Video Landscape",
      cardCategories: [
        { path: "/cat", label: "video" },
        { path: "/cat", label: "landscape" },
      ],
      cardPath: "/image3",
      cardImage: ImageVideo,
    },
    // Add more card objects as needed (up to 10 or more)
    {
      id: 4,
      cardRatio: "aspect-[9/16]",
      cardTitle: "Mobile Sunset",
      cardCategories: [
        { path: "/cat", label: "mobile" },
        { path: "/cat", label: "sunset" },
      ],
      cardPath: "/image4",
      cardImage: ImageMob,
    },
    {
      id: 5,
      cardRatio: "aspect-[1/1]",
      cardTitle: "Square Abstract",
      cardCategories: [
        { path: "/cat", label: "art" },
        { path: "/cat", label: "abstract" },
      ],
      cardPath: "/image5",
      cardImage: ImageSquare,
    },
    {
      id: 6,
      cardRatio: "aspect-[16/9]",
      cardTitle: "Video Cityscape",
      cardCategories: [
        { path: "/cat", label: "video" },
        { path: "/cat", label: "city" },
      ],
      cardPath: "/image6",
      cardImage: ImageVideo,
    },
    {
      id: 7,
      cardRatio: "aspect-[9/16]",
      cardTitle: "Mobile Forest",
      cardCategories: [
        { path: "/cat", label: "mobile" },
        { path: "/cat", label: "forest" },
      ],
      cardPath: "/image7",
      cardImage: ImageMob,
    },
    {
      id: 8,
      cardRatio: "aspect-[1/1]",
      cardTitle: "Square Minimal",
      cardCategories: [
        { path: "/cat", label: "art" },
        { path: "/cat", label: "minimal" },
      ],
      cardPath: "/image8",
      cardImage: ImageSquare,
    },
    {
      id: 9,
      cardRatio: "aspect-[16/9]",
      cardTitle: "Video Mountains",
      cardCategories: [
        { path: "/cat", label: "video" },
        { path: "/cat", label: "mountains" },
      ],
      cardPath: "/image9",
      cardImage: ImageVideo,
    },
    {
      id: 10,
      cardRatio: "aspect-[9/16]",
      cardTitle: "Mobile Ocean",
      cardCategories: [
        { path: "/cat", label: "mobile" },
        { path: "/cat", label: "ocean" },
      ],
      cardPath: "/image10",
      cardImage: ImageMob,
    },
  ];
  const breakpointColumnsObj = {
    default: 5,
    1024: 4,
    768: 3,
    640: 2,
  };
  return (
    <>
      <h1 className="fs-2xl fc-gradient">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore
        accusantium voluptates ducimus animi odio ut temporibus optio doloremque
        illo fugiat modi aperiam quam architecto, suscipit reprehenderit
        quisquam odit quod?
      </h1>
      <br />
      <h2 className="fs-xl fc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore
        accusantium voluptates ducimus animi odio ut temporibus optio doloremque
        illo fugiat modi aperiam quam architecto, suscipit reprehenderit
        quisquam odit quod?
      </h2>
      <br />
      <h3 className="fs-lg fc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore
        accusantium voluptates ducimus animi odio ut temporibus optio doloremque
        illo fugiat modi aperiam quam architecto, suscipit reprehenderit
        quisquam odit quod?
      </h3>
      <br />
      <h4 className="fs-md fc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore
        accusantium voluptates ducimus animi odio ut temporibus optio doloremque
        illo fugiat modi aperiam quam architecto, suscipit reprehenderit
        quisquam odit quod?
      </h4>
      <br />
      <p className="fs-sm fc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore
        accusantium voluptates ducimus animi odio ut temporibus optio doloremque
        illo fugiat modi aperiam quam architecto, suscipit reprehenderit
        quisquam odit quod?
      </p>
      <br />
      <p className="fs-sm fc-text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore
        accusantium voluptates ducimus animi odio ut temporibus optio doloremque
        illo fugiat modi aperiam quam architecto, suscipit reprehenderit
        quisquam odit quod?
      </p>
      <br />
      <p className="fs-xs fc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore
        accusantium voluptates ducimus animi odio ut temporibus optio doloremque
        illo fugiat modi aperiam quam architecto, suscipit reprehenderit
        quisquam odit quod?
      </p>
      <br />
      <p className="fs-xs fc-text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore
        accusantium voluptates ducimus animi odio ut temporibus optio doloremque
        illo fugiat modi aperiam quam architecto, suscipit reprehenderit
        quisquam odit quod?
      </p>
      <br />
      <MainButton buttonLabel="Download" />
      <br />
      <MainButton
        buttonLabel="Send"
        withIcon={<FaArrowRightLong fill="#11041b" />}
      />
      <br />
      <MainButton buttonLabel="Download" isFullWidth />
      <br />
      <MainButton buttonLabel="Download" withLink="/#" isFullWidth />
      <br />
      <div className="p-2 bg-secondary-light rounded-[20px] border border-[#4A427615]">
        <Formik
          initialValues={{ username: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
          }}
        >
          <Form>
            <MainField
              fieldName="username"
              fieldLabel="Username"
              fieldType="text"
              autocomplete="username"
              isRequired
              fieldStyle="mb-1"
            />
            <MainField
              fieldName="email"
              fieldLabel="Email"
              fieldType="email"
              autocomplete="username"
              isRequired
              fieldStyle="mb-1"
            />
            <MainField
              fieldName="message"
              fieldLabel="Message"
              fieldType="textArea"
              autocomplete="username"
              isRequired
              fieldStyle="mb-1.5"
              fieldMaxLength={500}
            />
            <MainButton
              buttonLabel="Send"
              buttonType="submit"
              isFullWidth
              withIcon={<FaArrowRightLong fill="#11041b" />}
            />
          </Form>
        </Formik>
      </div>
      {/* Render cards from array and map it */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-0.5"
        columnClassName="flex flex-col gap-0.5"
      >
        {cardsData.map((card, index) => (
          <MainCard key={index} {...card} />
        ))}
      </Masonry>
    </>
  );
};

export default Template;
