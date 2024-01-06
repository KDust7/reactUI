/* eslint-disable no-non-null-assertion */

import { useRef, useState, useEffect } from "react";
import viteLogo from "/trace.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import "./app/globals.css";
import "./index.css";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Progress } from "@/components/ui/progress-5s";
import { Separator } from "@/components/ui/separator";

function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme } = useTheme();
  const [currentColorHex, setCurrentColorHex] = useState(
    theme === "dark" ? "#000000" : "#FFFFFF",
  );
  const [count, setCount] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [buttonTextUpdated, setButtonTextUpdated] = useState(false);
  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) { // Add a null check
      window.selectedFiles = e.target.files;
      console.log(e);

      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        ...Array.from(window.selectedFiles),
      ]);

      // Check if any files were selected
      if (window.selectedFiles.length > 0) {
        console.log("Files selected:", window.selectedFiles);

        // For each file, do something with it
        // (e.g., read contents, display information)
        Array.from(window.selectedFiles).forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            console.log("File content:", e.target.result);
          };
          reader.readAsText(file);
        });
      }
    }
  }

  async function functionbetter(e: React.ChangeEvent<HTMLInputElement>) {

      console.log(window.selectedFiles);

      // Check if any files were selected
      if (window.selectedFiles && window.selectedFiles.length > 0) {
        console.log("Files selected:", window.selectedFiles);

        // Create a FormData object to send files as a multipart/form-data request
        var form = document.getElementById("uploadForm")
        const formData = new FormData(form);

        window.selectedFiles.forEach((file, index) => {
          formData.append(`file${index}`, file);
        });

        try {
          // Make a POST request to your Flask server endpoint
          const response = await fetch(
            "https://reactuiserver.kdust7.repl.co/upload",
            {
              method: "POST",
              body: formData,
            },
          );

          // Handle the response from the server as needed
          console.log("Server response:", await response.json());
        } catch (error) {
          console.error("Error uploading files:", error);
        }
      } else {
        console.log("No files selected, according to code. Error.");
      }
    }
  

  useEffect(() => {
    function setInitialColor() {
      if (document.documentElement.classList.contains("dark")) {
        setCurrentColorHex("#000000");
      } else if (document.documentElement.classList.contains("light")) {
        setCurrentColorHex("#FFFFFF");
      } else {
        setCurrentColorHex("#000000");
      }
    }

    setInitialColor();

    const classObserver = new MutationObserver(handleClassAttributeChanges);

    const observerOptions = {
      attributes: true,
      attributeFilter: ["class"],
      subtree: false,
    };

    classObserver.observe(document.documentElement, observerOptions);

    return () => {
      classObserver.disconnect();
    };
  }, [theme]);

  function handleClassAttributeChanges(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (document.documentElement.classList.contains("dark")) {
          setCurrentColorHex("#000000");
        } else if (document.documentElement.classList.contains("light")) {
          setCurrentColorHex("#FFFFFF");
        }
      }
    }
  }

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setCurrentValue(100);
      console.log(currentValue);
    }, 100);

    const finaltimeout = setTimeout(() => {
      var elementyes = document.getElementById("progress");
      var elementno = document.getElementById("progress3");
      // eslint-disable-next-line
      elementno.setAttribute(
        "class",
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary transition-all top-50percent",
      );
      // eslint-disable-next-line
      elementno.setAttribute(
        "class",
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary transition-all fade-out top-50percent",
      );
      // eslint-disable-next-line
      elementyes.setAttribute(
        "class",
        "h-full w-full flex-1 bg-primary transition-all top-50percent",
      );
      // eslint-disable-next-line
      elementyes.setAttribute(
        "class",
        "h-full w-full flex-1 bg-primary transition-all-5s fade-out top-50percent",
      );
      functionyes();
    }, 6000);
    var svgpath1 = document.getElementById("svgpath1");
    var svgpath2 = document.getElementById("svgpath2");
    if (svgpath1 && svgpath2) {
      // eslint-disable-next-line
      svgpath1.setAttribute("fill", currentColorHex);
      // eslint-disable-next-line
      svgpath2.setAttribute("fill", currentColorHex);
    }
    return () => {
      clearTimeout(timeout2);
      clearTimeout(finaltimeout);
    };
  }, [currentColorHex, currentValue]);

  useEffect(() => {
    const button = buttonRef.current;

    // Create a MutationObserver instance
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check if the mutation is related to the text content
        if (mutation.type === "characterData") {
          console.log("Button text changed:", button.textContent);
          var fileUpload = document.getElementById("fileUpload");
          fileUpload.disabled = true;
          setButtonTextUpdated(true);
        }
      });
    });

    // Define the options for the MutationObserver
    const observerOptions = {
      characterData: true, // Observe changes to character data (text content)
      subtree: true, // Observe changes within the button's subtree
    };

    // Start observing the button with the specified options
    observer.observe(button, observerOptions);

    // To disconnect the observer when needed (e.g., when the component unmounts):
    return () => {
      observer.disconnect();
    };
  }, [buttonRef]);

  function functionyes() {
    // eslint-disable-next-line
    var flext = document.getElementById("dragdropHeading");
    // eslint-disable-next-line
    flext.classList.remove("hidden");
    // eslint-disable-next-line
    var button = document.getElementById("uploadButton");
    // eslint-disable-next-line
    button.classList.remove("invisible");
    // eslint-disable-next-line
    var or = document.getElementById("or");
    // eslint-disable-next-line
    or.classList.remove("hidden");
    // eslint-disable-next-line
    var better = document.getElementById("separator1");
    // eslint-disable-next-line
    better.classList.remove("hidden");
    // eslint-disable-next-line
    var separator2 = document.getElementById("separator2");
    // eslint-disable-next-line
    separator1.setAttribute("style", "width: 20px");
    // eslint-disable-next-line
    separator2.setAttribute("style", "width: 20px");
    // eslint-disable-next-line
    separator2.classList.remove("hidden");
    // eslint-disable-next-line
  }
  useEffect(() => {
    const button = buttonRef.current;

    if (buttonTextUpdated) {
      const clickHandler = () => functionbetter();

      // Add the click event listener
      button.addEventListener("click", clickHandler);

      // Clean up the event listener when the component unmounts
      return () => {
        button.removeEventListener("click", clickHandler);
      };
    }
  }, [buttonRef, buttonTextUpdated, functionbetter]);
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <ModeToggle></ModeToggle>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <Progress
          className="top-50percent"
          id="progress3"
          value={currentValue}
        ></Progress>
        <h2 className="text-center hidden " id="dragdropHeading">
          Drag and drop a file anywhere on this page
        </h2>
        <br />
        <div className="flex justify-center items-center">
          <Separator id="separator1" className="mx-4 hidden" />
          <h3 className="text-center hidden" id="or">
            OR
          </h3>
          <Separator id="separator2" className="mx-4 hidden" />
        </div>
        <br />
<form method="post" id="uploadForm" encType="multipart/form-data">
        <Button
          className="text-center invisible"
          id="uploadButton"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
          ref={buttonRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_2"
            data-name="Layer 2"
            width="16"
            height="16"
            className="m-auto"
            viewBox="0 0 24 24"
          >
            <path
              id="svgpath1"
              d="M22,13a1,1,0,0,0-1,1v4.213A2.79,2.79,0,0,1,18.213,21H5.787A2.79,2.79,0,0,1,3,18.213V14a1,1,0,0,0-2,0v4.213A4.792,4.792,0,0,0,5.787,23H18.213A4.792,4.792,0,0,0,23,18.213V14A1,1,0,0,0,22,13Z"
              fill="#ffffff"
            />
            <path
              d="M6.707,8.707,11,4.414V17a1,1,0,0,0,2,0V4.414l4.293,4.293a1,1,0,0,0,1.414-1.414l-6-6a1,1,0,0,0-1.414,0l-6,6A1,1,0,0,0,6.707,8.707Z"
              id="svgpath2"
              fill="#ffffff"
            />
          </svg>
          {uploadedFiles.length > 0 ? "‎ Upload" : "‎ Browse a file"}

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
            id="fileUpload"
          />
        </Button>
</form>

        <div className="card">
          <Button
            variant="outline"
            className="baller invisible"
            onClick={() => setCount((count) => count + 1)}
          >
            Current count ➜ {count}
          </Button>
          <p className="invisible">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs invisible">
          Click on the Vite and React logos to learn more
        </p>
      </ThemeProvider>
    </>
  );
}

export default App;
