import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosPrivate from "../../api/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { UserListData } from "../../data/userData";
import Swal from "sweetalert2";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const schema = yup.object().shape({
  first_name: yup.string().required("Name is required"),
  last_name: yup.string().required("Name is required"),
  username: yup.string().required("Name is required"),
  email: yup.string().required("Description is required"),
});

interface FormData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
}

interface TeamData {
  message: string;
}

function getStatusClassName(status: string) {
  let className = "";

  if (status === "Active") {
    className =
      "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  } else if (status === "Invited") {
    className =
      "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
  } else if (status === "Suspended") {
    className =
      "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
  }

  return className;
}

export default function TeamTable() {
  const { companyId } = useParams<{ companyId: string }>();
  // const teamId = "O37Pf2Be";
  const URL_CREATE_MEMBER = `/team_back_office/v1/${companyId}/create_team_member`;
  const URL_MEMBERS = `/team_back_office/v1/${companyId}/users`;
  const URL_INVITE_MEMBERS = `/team_back_office/v1/${companyId}/add_existing_user_to_team/`;

  const { register: registerForm, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [userList, setUser] = useState<UserListData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteId, setInviteId] = useState("");
  const loadMembers = () => {
    axiosPrivate<UserListData>({ method: "GET", url: URL_MEMBERS })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Not Authorized.",
          text: "You are not Authorized to access this Section",
        });
        console.error("API Error:", error);
      });
  };

  const deleteTeamMember = (userId: string) => {
    const URL_DELETE_MEMBER = `/team_back_office/v1/${companyId}/users/${userId}`;
    Swal.fire({
      title: "Do you want to delete the team Member?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate({ method: "DELETE", url: URL_DELETE_MEMBER })
          .then(() => {
            toast.success("Team Member Deleted Successfully");
            loadMembers();
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Not Authorized.",
              text: "You are not Authorized to access this Section",
            });
            console.error("API Error:", error);
          });
      } else if (result.isDenied) {
        return;
      }
    });
  };

  const suspendTeamMember = (userId: string) => {
    const URL_SUSPEND_MEMBER = `/team_back_office/v1/${companyId}/suspend/${userId}`;
    Swal.fire({
      title: "Do you want to Suspend the team Member?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Suspend",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate({ method: "PUT", url: URL_SUSPEND_MEMBER })
          .then(() => {
            toast.success("Team Member Suspended Successfully");
            loadMembers();
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Not Authorized.",
              text: "You are not Authorized to access this Section",
            });
            console.error("API Error:", error);
          });
      } else if (result.isDenied) {
        return;
      }
    });
  };

  const onSubmit = async (data: FormData) => {
    return axiosPrivate<TeamData>({
      method: "POST",
      url: URL_CREATE_MEMBER,
      data: data,
    })
      .then((data) => {
        toast.success(data.message);
        loadMembers();
        toggleModal();
      })
      .catch((error) => {
        console.error("API Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const onSubmitInvite = async () => {
    if (inviteId === "") {
      toast.error("set a valid User Id");
      return;
    }
    return axiosPrivate<TeamData>({
      method: "POST",
      url: URL_INVITE_MEMBERS + inviteId,
    })
      .then((data) => {
        toast.success(data.message);
        loadMembers();
        toggleInviteModal();
      })
      .catch((error) => {
        console.error("API Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User is already a Team Member",
        });
      });
  };

  useQuery(["userDetails"], () => {
    return axiosPrivate<UserListData>({ method: "GET", url: URL_MEMBERS })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Not Authorized.",
          text: "You are not Authorized to access this Section",
        });
        console.error("API Error:", error);
      });
  });
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleInviteModal = () => {
    setIsInviteModalOpen((prev) => !prev);
  };

  return (
    <>
      {/* Card */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="mt-10 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  {/* Input */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="hs-as-table-product-review-search"
                      className="sr-only"
                    >
                      Search
                    </label>
                    <div className="relative lg:w-64 xl:w-96">
                      <input
                        type="text"
                        id="hs-as-table-product-review-search"
                        name="hs-as-table-product-review-search"
                        className="py-2 px-3  pl-11  block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Search"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <div
                      className="hs-dropdown relative inline-block [--placement:bottom-right]"
                      data-hs-dropdown-auto-close="inside"
                    >
                      <button
                        id="hs-as-table-table-filter-dropdown"
                        type="button"
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        Filter
                      </button>
                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                        aria-labelledby="hs-as-table-table-filter-dropdown"
                      >
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                          <label
                            htmlFor="hs-as-filters-dropdown-all"
                            className="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-all"
                            />
                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                              All
                            </span>
                          </label>
                          <label
                            htmlFor="hs-as-filters-dropdown-paid"
                            className="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-paid"
                            />
                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                              Active
                            </span>
                          </label>
                          <label
                            htmlFor="hs-as-filters-dropdown-pending"
                            className="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-pending"
                            />
                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                              Invited
                            </span>
                          </label>
                          <label
                            htmlFor="hs-as-filters-dropdown-declined"
                            className="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-declined"
                            />
                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                              Supended
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      onClick={toggleInviteModal}
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      Invite Member
                    </button>

                    <button
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      onClick={toggleModal}
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      New Member
                    </button>
                    <div
                      id="register-modal"
                      className={`hs-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto ${
                        isModalOpen ? "open" : "hidden"
                      }`}
                    >
                      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                              Add Member
                            </h3>
                            <button
                              type="button"
                              className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                              onClick={toggleModal}
                            >
                              <span className="sr-only">Close</span>
                              <svg
                                className="w-3.5 h-3.5"
                                width={8}
                                height={8}
                                viewBox="0 0 8 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-4 overflow-y-auto">
                              <label
                                htmlFor="input-label"
                                className="block text-sm font-medium mb-2 dark:text-white"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                id="input-label"
                                className="py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="First Name"
                                {...registerForm("first_name")}
                              />
                            </div>
                            <div className="p-4 overflow-y-auto">
                              <label
                                htmlFor="input-label"
                                className="block text-sm font-medium mb-2 dark:text-white"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="input-label"
                                className="py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="Last Name"
                                {...registerForm("last_name")}
                              />
                            </div>
                            <div className="p-4 overflow-y-auto">
                              <label
                                htmlFor="input-label"
                                className="block text-sm font-medium mb-2 dark:text-white"
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                id="input-label"
                                className="py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="Username"
                                {...registerForm("username")}
                              />
                            </div>
                            <div className="p-4 overflow-y-auto">
                              <label
                                htmlFor="input-label"
                                className="block text-sm font-medium mb-2 dark:text-white"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                id="input-label"
                                className="py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="email@company.com"
                                {...registerForm("email")}
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                              <button
                                type="button"
                                className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                onClick={toggleModal}
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                              >
                                Invite
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      id="invite-modal"
                      className={`hs-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto ${
                        isInviteModalOpen ? "open" : "hidden"
                      }`}
                    >
                      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                              Invite Existing Member
                            </h3>
                            <button
                              type="button"
                              className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                              onClick={toggleInviteModal}
                            >
                              <span className="sr-only">Close</span>
                              <svg
                                className="w-3.5 h-3.5"
                                width={8}
                                height={8}
                                viewBox="0 0 8 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <form>
                            <div className="p-4 overflow-y-auto">
                              <label
                                htmlFor="input-label"
                                className="block text-sm font-medium mb-2 dark:text-white"
                              >
                                User Id
                              </label>
                              <input
                                type="text"
                                id="input-label"
                                className="py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="User Id"
                                value={inviteId}
                                onChange={(e) => setInviteId(e.target.value)}
                              />
                            </div>

                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                              <button
                                type="button"
                                className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                onClick={toggleInviteModal}
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                onClick={onSubmitInvite}
                                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                              >
                                Invite
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Header */}
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                {userList?.users.length !== 0 ? (
                  <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                      <th scope="col" className="pl-6 py-3 text-left">
                        <label
                          htmlFor="hs-at-with-checkboxes-main"
                          className="flex"
                        >
                          <input
                            type="checkbox"
                            className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-at-with-checkboxes-main"
                          />
                          <span className="sr-only">Checkbox</span>
                        </label>
                      </th>
                      <th
                        scope="col"
                        className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Name
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Username
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Role
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Status
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Last Login
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Date Created
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Action
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                ) : (
                  ""
                )}
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {userList?.users.length !== 0 ? (
                    userList?.users.map((data) => (
                      <tr>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="pl-6 py-3">
                            <label
                              htmlFor="hs-at-with-checkboxes-1"
                              className="flex"
                            >
                              <input
                                type="checkbox"
                                className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-at-with-checkboxes-1"
                              />
                              <span className="sr-only">Checkbox</span>
                            </label>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-300 dark:bg-blue-700">
                                <span className="font-medium text-blue-800 leading-none dark:text-blue-200">
                                  {data.username.charAt(0).toUpperCase()}
                                </span>
                              </span>
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                  {data.first_name}
                                </span>
                                <span className="block text-sm text-gray-500">
                                  {data.email}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                              {data.username}
                            </span>
                            <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                              {data.id}
                            </span>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {data.role}
                            </span>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className={getStatusClassName("Active")}>
                              Active
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-500">login</span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-500">2023</span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                              <button
                                id="hs-table-dropdown-6"
                                type="button"
                                className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                              >
                                <i className="bi bi-three-dots"></i>
                              </button>
                              <div
                                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                                aria-labelledby="hs-table-dropdown-6"
                              >
                                <div className="py-2 first:pt-0 last:pb-0">
                                  <button
                                    className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    onClick={() => suspendTeamMember(data.id)}
                                  >
                                    Suspend
                                  </button>
                                </div>
                                <div className="py-2 first:pt-0 last:pb-0">
                                  <button
                                    className="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                    onClick={() => deleteTeamMember(data.id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div className="max-w-sm w-full min-h-[400px] flex flex-col justify-center mx-auto px-6 py-4">
                      <div className="flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
                        <i className="bi bi-card-list"></i>
                      </div>
                      <h2 className="mt-5 font-semibold text-gray-800 dark:text-white">
                        No Team Member Found
                      </h2>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Invite New Team Members.
                      </p>
                      <div></div>
                      <div className="mt-5 grid sm:flex gap-2">
                        <button
                          type="button"
                          className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          onClick={toggleModal}
                        >
                          <i className="bi bi-plus"></i>
                          Add a Member
                        </button>
                        <button
                          type="button"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          onClick={toggleInviteModal}
                        >
                          Invite Existing User
                        </button>
                      </div>
                    </div>
                  )}
                </tbody>
              </table>
              {/* End Table */}
              {/* Footer */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {userList?.total}
                    </span>{" "}
                    results
                  </p>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      Prev
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      Next
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </>
  );
}
