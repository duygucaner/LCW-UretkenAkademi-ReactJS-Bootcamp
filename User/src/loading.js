import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Main from "./main";

function Loading() {
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
          setDone(true);
    }, 2000);
  }, []);

  return (
    <>
      {!done ? (
        <ReactLoading
          type={"bubbles"}
          color={"black"}
          height={100}
          width={100}
        />
      ) : (
            <Main/>
      )}
    </>
  );
}

export default Loading;
