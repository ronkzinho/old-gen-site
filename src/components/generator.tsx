import React, { useCallback, useEffect, useRef } from "react";
import { Generator } from "../pages/api/generators";

export const GeneratorComponent: React.FC<{
  generator: Generator;
  focused: boolean;
  setFocused: (value: string) => any;
  currentFocus: string;
  closeGen: () => any;
}> = ({ generator: gen, focused, setFocused, currentFocus, closeGen }) => {
  const focusable = currentFocus === "";
  const ref = useRef<HTMLDivElement>();

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) closeGen();
    },
    [closeGen]
  );

  useEffect(() => {
    if (!focused) return;
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [focused, handleOutsideClick]);

  return (
    <div
      className={focused ? "generatorContainer focused" : "generatorContainer"}
      style={
        focused
          ? {
              position: "fixed",
              width: "80%",
              height: "90%",
              maxWidth: "80%",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto",
              fontSize: "calc(16px + 1vw)",
              zIndex: 100,
              pointerEvents: "auto",
            }
          : {
              cursor: focusable ? "pointer" : "auto",
              filter: currentFocus !== "" ? "blur(10px)" : "none",
            }
      }
      onClick={() => {
        focusable && setFocused(gen.name);
      }}
      key={gen.name}
    >
      <div
        className="generator"
        style={{
          width: "100%",
          height: "100%",
          backdropFilter:
            focused || gen.verifiable === false ? "brightness(.5)" : "brightness(.8)",
          overflow: focused ? "auto" : "hidden",
          display: "grid",
        }}
        ref={ref as any}
      >
        <div
          style={{
            zIndex: focused ? 101 : "auto",
            display: "inline",
            margin: "auto",
            maxWidth: "80%",
          }}
        >
          <h1 style={gen.verifiable === false ? { color: "red" } : {}}>
            {gen.name}
          </h1>
          {!gen.isGroup && (
            <p className="sha">
              sha256sum: {gen.sha256sum}
            </p>
          )}
          {focused && gen.verifiable === false && (
            <p className="notVerifiable">
              Runs using this {gen.isGroup && "group of"} filter
              {gen.isGroup && "s"}/generator{gen.isGroup && "s"} won{"'"}t be
              able to get verified
            </p>
          )}
          {focused && (
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  maxWidth: "90%",
                  width: "100%",
                  overflowY: "hidden",
                  fontSize: "100%",
                  padding: 0,
                  marginBottom: 0,
                }}
              >
                {gen.description?.split("\n").map((str) => (
                  <p key={str}>{str}</p>
                ))}
              </div>
              {!gen.isGroup && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {gen.source && (
                    <a
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: 0,
                        marginBottom: "20px",
                      }}
                      href={gen.source}
                    >
                      <button className="link">Source code</button>
                    </a>
                  )}
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: 0,
                    }}
                    href={gen.url}
                  >
                    <button className="link">Download it</button>
                  </a>
                  {focused && (
                    <div onClick={closeGen} className="closeWrapper">
                      <a className="close"></a>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
