import { MainFieldProps } from "@/lib/types/types";
import { Field, ErrorMessage, useField } from "formik";
import { FC } from "react";

const MainField: FC<MainFieldProps> = ({
  fieldLabel,
  fieldName,
  fieldType = "text",
  fieldStyle = "",
  fieldMaxLength = 41,
  isRequired = false,
  autocomplete,
}) => {
  const [_, meta] = useField(fieldName);
  return (
    <fieldset
      className={`bg-background w-full px-1 py-0.5 relative flex border-1 border-transparent focus-within:border-[#4a4276] duration-300 rounded-[10px] ${fieldStyle} ${
        meta.value ? "field-busy" : ""
      }`}
    >
      {fieldLabel && (
        <label
          htmlFor={fieldName}
          className="absolute fs-sm fc-text top-[13px] left-[15px] duration-300 flex items-center bg-background ps-[5px]"
        >
          {fieldLabel}
          {isRequired && <span className="fc-danger mx-[5px] fs-xs">*</span>}
        </label>
      )}

      <Field
        as={fieldType === "textArea" ? "textarea" : "input"}
        type={fieldType !== "textArea" ? fieldType : undefined}
        name={fieldName}
        id={fieldName}
        maxLength={fieldMaxLength}
        required={isRequired}
        aria-describedby={`${fieldName}-error`}
        className={`w-full h-full fs-sm fc-text-muted focus:outline-none rounded-[10px] px-0.5 peer`}
        autoComplete={autocomplete}
      />
      <ErrorMessage
        name={fieldName}
        id={`${fieldName}-error`}
        component="div"
        className="fc-danger fs-xs absolute bottom-[-18px] left-[0px]"
      />
    </fieldset>
  );
};

export default MainField;
