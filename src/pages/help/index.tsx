import MainDashboard from "../../components/dashboards/main_dashboard";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import styles from "../../css/phoneInput.module.css";

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

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [phone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.message ||
      !formData.companyName ||
      !formData.companyWebsite
    ) {
      setError(
        "Name, email, phone number, company name, company website, and message are required fields."
      );
      return;
    }
    const subject = `Contact us from ${formData.name} from ${formData.companyName}`;

    try {
      setFormData((prevData) => ({
        ...prevData,
        subject: subject,
      }));

      const response = await axios.post(
        "https://api-dev.adaptacs.com/send_email/v1/send_email/frontend_send_email",
        formData
      );
      const responseData = response.data;

      if (responseData.success) {
        setSuccess(responseData.data);
      } else {
        setError(responseData.message);
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: responseData.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError("An error occurred while submitting the form.");
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                      {/* Grid */}
                      <div>
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Name"
                            id="name"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* End Grid */}
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Email"
                          id="email"
                          onChange={handleChange}
                        />
                      </div>
                      <div className={styles["my-phone-input"]}>
                        <label htmlFor="phone" className="sr-only">
                          Phone Number
                        </label>
                        <PhoneInput
                          className="w-full"
                          defaultCountry="ke"
                          inputClassName="w-full"
                          name="phone"
                          value={phone}
                          // onChange={(phone) => handleChange}
                        />
                      </div>
                      {/* Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="companyName" className="sr-only">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Company Name"
                            id="companyName"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="companyWebsite" className="sr-only">
                            Company Website
                          </label>
                          <input
                            type="url"
                            name="companyWebsite"
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Company Website"
                            id="website"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* End Grid */}
                      <div>
                        <label htmlFor="message" className="sr-only">
                          Message
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Details"
                          id="message"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    {success && (
                      <div
                        className="max-w-xs bg-green-100 border border-green-200 text-sm text-green-500 rounded-md shadow-md"
                        role="alert"
                      >
                        <div className="flex p-4">
                          {success}
                          <div className="ml-auto">
                            <button
                              type="button"
                              className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-green-400 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-400 transition-all text-sm"
                            >
                              <span className="sr-only">Close</span>
                              <svg
                                className="w-3.5 h-3.5"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {error && (
                      <div
                        className="max-w-xs bg-red-100 border border-red-200 text-sm text-red-500 rounded-md shadow-md"
                        role="alert"
                      >
                        <div className="flex p-4">
                          {error}
                          <div className="ml-auto">
                            <button
                              type="button"
                              className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-red-400 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-100 focus:ring-red-400 transition-all text-sm"
                            >
                              <span className="sr-only">Close</span>
                              <svg
                                className="w-3.5 h-3.5"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
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
