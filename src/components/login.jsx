import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import image from "./illustration.png";
import logo from "./img.png";

export const Login = () => {
  const navigate = useNavigate();

  const randomNumber = () => Math.random() * 1234;

  const validate = yup.object({
    input: yup
      .string()
      .email("Enter valid email")
      .required("This field is required."),
    password: yup
      .string()
      .required("This field is required.")
      .min(8, "Password must be at least 8 characters long")
      .test(
        "uppercase",
        "Password must include at least one uppercase letter",
        (value) => /[A-Z]/.test(value)
      )
      .test(
        "lowercase",
        "Password must include at least one lowercase letter",
        (value) => /[a-z]/.test(value)
      )
      .test("number", "Password must include at least one number", (value) =>
        /\d/.test(value)
      )
      .test(
        "specialChar",
        "Password must include at least one special character",
        (value) => /[@$!%*?&]/.test(value)
      ),
  });

  function handleSubmit(values) {
    const { input, password } = values;
    let availableData = JSON.parse(localStorage.getItem("Data")) || [];

    const userFound = availableData.find(
      (data) => data.email === input && data.password === password
    );

    let userId;
    if (userFound) {
      userId = userFound.id;
      localStorage.setItem("userId", userId);
    } else {
      userId = randomNumber();
      availableData.push({
        id: userId,
        email: input,
        password: password,
        list: [],
      });
      localStorage.setItem("Data", JSON.stringify(availableData));
      localStorage.setItem("userId", userId);
    }
    navigate(`/todo/${userId}`);
  }

  return (
    <div className="bg-[#FFE6C9] flex justify-center items-center h-screen">
      <Formik
        initialValues={{
          input: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex gap-8 rounded-3xl shadow-[0px_0px_45px_0px_#E1C2A8] p-1  bg-white text-[#525252]">
            <img src={image} className="h-[27em] rounded-l-[20px]" />
            <div className="w-[17em] mt-14 ">
              <img src={logo} className="h-8 mb-5" />
              <h1 className="text-xl font-semibold tracking-wide mb-4">
                Login to your Account
              </h1>
              <div className="w-[14em] ">
                <div className="text-[15px] relative">
                  <label>
                    <span className="hover:cursor-pointer">Email</span>
                    <br />
                    <Field
                      name="input"
                      className="border outline-none p-1 rounded-md w-full"
                    />
                    <ErrorMessage
                      name="input"
                      component="span"
                      className="text-red-400 absolute top-14 left-0"
                    />
                  </label>
                </div>
                <br />
                <div className="mb-5">
                  <label className="text-[15px] relative">
                    <span className="hover:cursor-pointer">Password</span>
                    <br />
                    <Field
                      name="password"
                      type="password"
                      className="border outline-none p-1 rounded-md w-full"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-red-400 absolute left-0 top-[3.6em]"
                    />
                  </label>
                </div>
                <br />
                <button
                  className="border w-full bg-[#7F265B] text-white font-bold p-2 rounded-md hover:opacity-90 active:opacity-80 transition duration-300  hover:shadow-[0px_0px_10px_0px_#E1C2A8]"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
