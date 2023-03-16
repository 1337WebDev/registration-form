import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Step1 = ({ setUser, setName, name, next }) => {
  const [error, setError] = useState(false);
  const handleClick = () => {
    if (name === "") {
      setError(true);
      return;
    }
    next();
  };

  return (
    <>
      <h1 className="question__heading mb">What&apos;s your name?*</h1>
      <input
        className="input mb"
        type="text"
        placeholder="Type your answer here"
        onFocus={() => {
          setError(false);
        }}
        onChange={(e) => {
          setName(e.target.value);
          setUser(e.target.value);
        }}
      />
      {error && <p className="error mb">Please enter your name</p>}
      <button onClick={handleClick}>Continue</button>
    </>
  );
};

const Step2 = ({ name, setCampus, campus, next }) => {
  const [error, setError] = useState(false);
  const [other, setOther] = useState(false);
  const handleClick = () => {
    if (other && campus === "") {
      setError(true);
      return;
    }
    next();
  };

  const handleOption = (option) => {
    setCampus(option);
    next();
  };

  return (
    <>
      <h1 className="question__heading mb">
        Nice to meet you, {name.split(" ")[0]}
        <br />
        Which school - university you are currently attending?
      </h1>
      {!other && (
        <div className="selection">
          <button className="option" onClick={() => handleOption("1337KH")}>
            1337KH
          </button>
          <button className="option" onClick={() => handleOption("1337MED")}>
            1337MED
          </button>
          <button className="option" onClick={() => handleOption("UM6P")}>
            UM6P
          </button>
          <button className="option" onClick={() => setOther(true)}>
            Other
          </button>
        </div>
      )}
      {other && (
        <>
          <input
            className="input mb"
            type="text"
            placeholder="Type your answer here"
            onFocus={() => {
              setError(false);
            }}
            onChange={(e) => {
              setCampus(e.target.value);
            }}
          />
          {error && <p className="error mb">Please enter your campus</p>}
          <button onClick={handleClick}>Continue</button>
        </>
      )}
    </>
  );
};

const Step3 = ({ setMail, mail, next }) => {
  const [error, setError] = useState(false);
  const handleClick = () => {
    if (mail === "") {
      setError(true);
      return;
    }
    next();
  };

  return (
    <>
      <h1 className="question__heading mb">
        Please provide your email address?*
      </h1>
      <input
        className="input mb"
        type="mail"
        placeholder="Type your answer here"
        onFocus={() => {
          setError(false);
        }}
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      {error && <p className="error mb">Please enter your email address</p>}
      <button onClick={handleClick}>Continue</button>
    </>
  );
};

const Form = ({ switchPage, setUser }) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [campus, setCampus] = useState("");
  const [mail, setMail] = useState("");
  const router = useRouter();

  const next = () => {
    if (step !== 2) setStep(step + 1);
    if (step === 2) {
      axios
        .post("http://localhost:3000/api/register", {
          name: name,
          campus: campus,
          mail: mail,
        })
        .then((res) => {
          if (res.status === 200) {
            switchPage();
          } else router.push("/error");
        });
    }
  };
  return (
    <>
      {step === 0 && (
        <Step1 name={name} setName={setName} setUser={setUser} next={next} />
      )}
      {step === 1 && (
        <Step2 name={name} campus={campus} setCampus={setCampus} next={next} />
      )}
      {step === 2 && <Step3 mail={mail} setMail={setMail} next={next} />}
    </>
  );
};

export default Form;
