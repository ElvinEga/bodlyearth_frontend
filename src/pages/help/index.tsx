import MainDashboard from "../../components/dashboards/main_dashboard";
import { useState } from "react";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import styles from "../../css/phoneInput.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("required")
    .min(10, "too short")
    .max(14, "too long"),
  companyName: yup.string().required("Company name is required"),
  companyWebsite: yup
    .string()
    .url("Invalid URL")
    .required("Company website is required"),
  message: yup.string().required("Message is required"),
});

export default function HelpPage() {
  const [formData, setFormData] = useState({
    secret: "A;eJsfEgF+A'*e{D&Lx_l+L5ME#/uYWe",
    to_email: "info@adapta.earth",
    email: "",
    subject: "",
    message: "",
    html_message: "",
    name: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
  });
  const [inputPhone, setPhone] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const subject = `Contact us from ${data.name} from ${data.companyName}`;
    setFormData((prevData) => ({
      ...prevData,
      subject: subject,
      email: data.email,
      message: data.message,
      name: data.name,
      phone: inputPhone,
      companyName: data.companyName,
      companyWebsite: data.companyWebsite,
    }));

    try {
      const response = await axios.post(
        "https://api-dev.adaptacs.com/send_email/v1/send_email/frontend_send_email",
        formData
      );
      const responseData = response.data;

      toast.success(responseData.message);
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <MainDashboard>
      <div>
        <>
          {/* Contact Us */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                  Get in touch
                </h1>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our team would love to hear from you.
                </p>
              </div>
              <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                {/* Card */}
                <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                  <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Fill in the form
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                      {/* Grid */}
                      <div>
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Name
                          </label>
                          <input
                            type="text"
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Name"
                            id="name"
                            {...register("name")}
                          />{" "}
                          <p className="text-red-500 text-sm">
                            {errors.name?.message}
                          </p>
                        </div>
                      </div>
                      {/* End Grid */}
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          autoComplete="email"
                          className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Email"
                          id="email"
                          {...register("email")}
                        />{" "}
                        <p className="text-red-500 text-sm">
                          {errors.email?.message}
                        </p>
                      </div>
                      <div className={styles["my-phone-input"]}>
                        <label htmlFor="phone" className="sr-only">
                          Phone Number
                        </label>
                        <PhoneInput
                          {...register("phone")}
                          className="w-full"
                          defaultCountry="ke"
                          inputClassName="w-full"
                          name="phone"
                          onChange={(inputPhone) => setPhone(inputPhone)}
                          value="{inputPhone}"
                        />
                        <p className="text-red-500 text-sm">
                          {errors.phone?.message}
                        </p>
                      </div>
                      {/* Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="companyName" className="sr-only">
                            Company Name
                          </label>
                          <input
                            type="text"
                            {...register("companyName")}
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Company Name"
                            id="companyName"
                          />
                          <p className="text-red-500 text-sm">
                            {errors.companyName?.message}
                          </p>
                        </div>
                        <div>
                          <label htmlFor="companyWebsite" className="sr-only">
                            Company Website
                          </label>
                          <input
                            type="url"
                            {...register("companyWebsite")}
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Company Website"
                            id="website"
                          />
                          <p className="text-red-500 text-sm">
                            {errors.companyWebsite?.message}
                          </p>
                        </div>
                      </div>
                      {/* End Grid */}
                      <div>
                        <label htmlFor="message" className="sr-only">
                          Message
                        </label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Details"
                          id="message"
                        />
                        <p className="text-red-500 text-sm">
                          {errors.message?.message}
                        </p>
                      </div>
                    </div>
                    {/* End Grid */}

                    <div className="mt-4 grid">
                      <button
                        type="submit"
                        className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Card */}
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  {/* Icon Block */}
                  <div className="flex gap-x-7 py-6">
                    <i className="bi bi-envelope text-3xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        Our Email Address
                      </h3>
                      <p className="mt-1 text-2xl text-gray-500">
                        info@adapta.earth
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex gap-x-7 py-6">
                    <svg
                      className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        Call For Agricultural Requests
                      </h3>
                      <p className="mt-1 text-2xl text-gray-500">
                        +254 723083567
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className=" flex gap-x-7 py-6">
                    <i className="bi bi-telephone text-3xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        Call For General Requests
                      </h3>
                      <p className="mt-1 text-2xl text-gray-500">
                        +254 725398993
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className=" flex gap-x-7 py-6"></div>
                  {/* End Icon Block */}
                </div>
              </div>
            </div>
          </div>
          {/* End Contact Us */}
        </>
      </div>
    </MainDashboard>
  );
}
