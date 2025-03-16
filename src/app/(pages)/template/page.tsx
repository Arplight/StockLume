"use client";
import MainButton from "@/components/common/mainButton";
import MainField from "@/components/common/mainField";
import { Field, Formik, Form } from "formik";
import { FaArrowRightLong } from "react-icons/fa6";

const Template = () => {
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
    </>
  );
};

export default Template;
