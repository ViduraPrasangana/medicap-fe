import React, { useRef, useState } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import axios from 'axios';
const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Landing() {
  const [file, setFile] = useState(null);
  const [base64URL, setBase64URL] = useState(null);
  const [caption, setCaption] = useState(null);
  const inputFile = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const getBase64 = (file) => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };
  const handleFileInputChange = (e) => {
    var target = e.target
    let f = target.files[0];
    setFile(f)
    console.log(f)
    setCaption(null)
    getBase64(f)
      .then((result) => {
        setBase64URL(result);
        setFile(
          file
        );
        axios.post("http://127.0.0.1:5000/predict", { image: result.replace("data:image/jpeg;base64,", "").replace("data:image/png;base64,", "").replace("data:image/jpg;base64,", "") }).then((res) => {
          console.log(res)
          setCaption(res.data.results[0])
        }).catch(err => {
          console.log(err)
          setCaption(null)
        }
        )
        scrollTo("projects")
      })
      .catch(err => {
        console.log(err);
      });

    setFile(
      target.files[0]
    )
  };

  const clear = () => {
    setFile(null)
    setBase64URL(null)
    setCaption(null)
  }
  return (
    <>
      <TopNavbar />
      <Header />
      <Services selectAction={onButtonClick} inputFile={inputFile} handleFileInputChange={handleFileInputChange} clear={clear} />
      <Projects image={base64URL} caption={caption} />
      {/* <Blog />
      <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}


