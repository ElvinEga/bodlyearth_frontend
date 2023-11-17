"use client";

import { Link } from "react-router-dom";
import OTPInput from "../../components/otpinput";
import { useEffect, useState } from "react";
import axiosPrivate from "../../api/axiosPrivate";
// import useAuth from "../../hooks/useAuth";

// const PASSWORD_URL = "/create-password";
const RESEND_URL = "/request-new-otp";

interface FormData {
  user_id: string;
  otp: string;
}

const OtpPage = () => {
  // const navigate = useNavigate();
  // const from = "/create-password";
  const [otpCode, setOtpCode] = useState("");
  const [email, setEmail] = useState("");
  const userId = localStorage.getItem("userid") || "";
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("useremail") || "");
  }, []);

  const sendOtp = (otpNumb: string) => {
    if (otpNumb.length == 6) {
      console.log("Number OTP: ", otpNumb);
      setOtpCode(otpNumb);
      // onSubmit(dataForm)
    }
  };

  const onSubmit = async () => {
    if (otpCode.length == 6) {
      const data: FormData = {
        user_id: userId || "",
        otp: otpCode,
      };
      console.log(data);

      // await axiosPrivate
      //   .post(PASSWORD_URL, JSON.stringify(data))
      //   .then((response) => {
      //     console.log(JSON.stringify(response.data));

      //     navigate(from, { replace: true });
      //     const mssg = "User Verified.";
      //     setSuccessMsg(mssg);
      //     setErrMsg("");
      //   })
      //   .catch((err) => {
      //     if (!err?.response) {
      //       setErrMsg("No Server Response");
      //     } else if (err.response?.status === 400) {
      //       setErrMsg("Missing Username or Password");
      //     } else if (err.response?.status === 401) {
      //       setErrMsg("You have netered an Invalid Email or Password");
      //     } else {
      //       setErrMsg("Failed");
      //     }
      //   });
    }
  };

  const onResendSubmit = async () => {
    const data = {
      user_id: userId,
    };
    console.log(data);

    axiosPrivate({ method: "POST", url: RESEND_URL, data })
      .then((data) => {
        console.log(JSON.stringify(data));

        // navigate(from, { replace: true });
        const mssg = "Code Resent.";
        setSuccessMsg(mssg);
        setErrMsg("");
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("You have netered an Invalid Email or Password");
        } else {
          setErrMsg("Failed");
        }
      });
    alert(errMsg);
    alert(successMsg);
  };

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="bg-white dark:bg-gray-800 shadow flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <Link to="/">
                <img
                  alt="ADAPTA"
                  className="w-56 mx-auto"
                  src="/img/logo.png"
                />
              </Link>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="w-full flex-1 mt-12">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="font-semibold text-3xl">
                      <p>Email Verification</p>
                    </div>
                    <div className="flex flex-row text-sm font-medium text-gray-400">
                      <p>We have sent a code to your email {email}</p>
                    </div>
                  </div>
                  <div>
                    {/* <form onSubmit={onSubmit}> */}
                    <div className="flex flex-col space-y-16">
                      <OTPInput
                        autoFocus
                        isNumberInput
                        length={6}
                        className="flex flex-row items-center justify-between mx-auto w-full "
                        inputClassName="w-16 h-16 flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        onChangeOTP={(otp) =>
                          // console.log("Number OTP: ", otp)
                          sendOtp(otp)
                        }
                      />
                      <div className="flex flex-col space-y-5">
                        <div>
                          <button
                            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                            onClick={() => onSubmit()}
                          >
                            Verify Account
                          </button>
                        </div>
                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                          <p>Didn't recieve code?</p>{" "}
                          <button
                            onClick={() => onResendSubmit()}
                            className="flex flex-row items-center text-blue-600"
                            type="reset"
                          >
                            Resend
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:flex hidden dark:bg-gray-900">
            <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('/img/veges.jpg')] bg-no-repeat bg-center bg-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
