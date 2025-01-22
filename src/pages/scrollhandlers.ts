export const scrollToHome = () => {
    const homePage = document.getElementById("hero");
    if (homePage) {
      homePage.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  export const scrolltoServices = () => {
    const servicesPage = document.getElementById("services");
    if (servicesPage) {
      servicesPage.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  export const scrollToAbout = () => {
    const aboutPage = document.getElementById("about");
    if (aboutPage) {
      aboutPage.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  export const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };