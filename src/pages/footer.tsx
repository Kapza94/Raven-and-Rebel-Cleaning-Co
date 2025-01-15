// import React from "react";
// import Link from "next/link";

// const footer = () => {
//   return (
//     <>
//       <div
//         className="relative z-50 bg-[#161616] px-6 pb-7 sm:px-5 md:px-10 2xl:px-28 clicked-element hovered-element"
//         contentEditable="true"
//       >
//         <div className="flex flex-wrap lg:flex-nowrap">
//           <div className="mb-7 w-full lg:mb-0 lg:w-[40%]">
//             <span className="text-xl font-semibold text-[var(--light-text-color)] [font-family:var(--font-family-heading)] sm:text-5xl">
//               Raven and Rebel Cleaning Co
//             </span>
//             <p className="my-5 max-w-full text-base font-normal leading-7 text-[var(--light-text-color)] sm:text-sm lg:mb-6 lg:mt-9 lg:max-w-[330px] xl:max-w-[418px] xl:text-base">
//               At Raven and Rebel Cleaning Co, we specialize in delivering tailored cleaning
//               solutions for offices, homes, and construction sites. Our dedicated team ensures a
//               pristine environment tailored to your specific needs.
//             </p>
//             <ul className="">
//               <li className="mb-3.5">
//                 <a
//                   href="#"
//                   className="flex items-center gap-3 text-lg font-normal text-[var(--light-text-color)]"
//                 >
//                   <span className="block w-6">
//                     <i className="fa-regular fa-phone text-lg" aria-hidden="true"></i>
//                   </span>
//                 </a>
//               </li>
//               <li className="mb-3.5">
//                 <a
//                   href="#"
//                   className="flex items-center gap-3 text-lg font-normal text-[var(--light-text-color)]"
//                 >
//                   <span className="block w-6">
//                     <i className="fa-regular fa-envelope text-lg" aria-hidden="true"></i>
//                   </span>
//                   support@ravenandrebelcleaning.com
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center gap-3 text-lg font-normal text-[var(--light-text-color)]"
//                 >
//                   <span className="block w-6">
//                     <i className="fa-regular fa-location-dot text-lg" aria-hidden="true"></i>
//                   </span>
//                   123 Clean Street, CO, USA
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="mb-[22px] w-full sm:mb-0 sm:w-3/12 md:w-4/12 lg:w-[15%]">
//             <h5 className="mb-1.5 flex items-center justify-between text-[22px] font-medium text-[var(--light-text-color)] sm:mb-4 sm:text-xl">
//               Quick Links{" "}
//               <a href="#" className="flex items-center sm:hidden">
//                 <i className="fa-regular fa-plus text-lg" aria-hidden="true"></i>
//               </a>
//             </h5>
//             <ul className="">
//               <li>
//                 <Link
//                   href="/"
//                   className="mb-2.5 block text-lg font-normal text-[var(--light-text-color)] sm:mb-4"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/about"
//                   className="mb-2.5 block text-lg font-normal text-[var(--light-text-color)] sm:mb-4"
//                 >
//                   About Us
//                 </a>
//               </li>
//                 <Link
//                   href="/services"
//                   className="mb-2.5 block text-lg font-normal text-[var(--light-text-color)] sm:mb-4"
//                 >
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/request-quote"
//                   className="mb-2.5 block text-lg font-normal text-[var(--light-text-color)] sm:mb-4"
//                 >
//                   Request a Quote
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/testimonials"
//                   className="mb-2.5 block text-lg font-normal text-[var(--light-text-color)] sm:mb-4"
//                 >
//                   Testimonials
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contact"
//                   className="block text-lg font-normal text-[var(--light-text-color)]"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="mb-[22px] w-full sm:mb-0 sm:w-3/12 md:w-4/12 lg:w-[15%]">
//             <h5 className="mb-1.5 flex items-center justify-between text-[22px] font-medium text-[var(--light-text-color)] sm:mb-4 sm:text-xl">
//               Stay In Touch{" "}
//               <a href="#" className="flex items-center sm:hidden">
//                 <i className="fa-regular fa-plus text-lg" aria-hidden="true"></i>
//               </a>
//             </h5>
//             <ul className="hidden sm:block">
//               <li>
//                 <a
//                   href="/blog"
//                   className="mb-2.5 block text-lg font-normal text-[var(--light-text-color)] sm:mb-4"
//                 >
//                   {" "}
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-6/12 md:w-4/12 lg:w-[30%]">
//             <h5 className="mb-1.5 hidden text-xl font-medium text-[var(--light-text-color)] sm:mb-4">
//               Stay Updated
//             </h5>
//             <p className="mb-6 hidden max-w-[418px] text-lg font-normal leading-7 text-[var(--light-text-color)] sm:mt-9 sm:text-base">
//               Sign up to our newsletter for the latest insights on cleaning tips and updates.
//             </p>
//             <form className="relative mb-[30px] hidden sm:mb-[50px]">
//               {/* <input type="email" className="h-[60px] w-full rounded-full border-0 bg-white/[7%] px-[30px] text-lg font-normal text-[var(--light-text-color)] placeholder:text-[var(--light-text-color)] focus:ring-0" placeholder="Your Email"> */}
//               <a
//                 href="#"
//                 className="absolute right-[5px] top-1/2 flex h-[50px] w-[130px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--primary-color)] text-lg font-medium text-[var(--primary-button-text-color)]"
//               >
//                 Subscribe
//               </a>
//             </form>
//             <h5 className="mb-4 hidden text-xl font-medium text-[var(--light-text-color)] sm:block">
//               Follow Us
//             </h5>
//             <ul className="flex items-center justify-center gap-3.5 sm:justify-start sm:gap-1.5 lg:gap-[14px]">
//               <li>
//                 <a
//                   href="#"
//                   className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--light-text-color)] bg-[#010202] text-[var(--light-text-color)] sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-[50px] lg:w-[50px]"
//                 >
//                   <i className="fa-brands fa-facebook-f text-lg" aria-hidden="true"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--light-text-color)] bg-[#010202] text-[var(--light-text-color)] sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-[50px] lg:w-[50px]"
//                 >
//                   <i className="fa-brands fa-x-twitter text-lg" aria-hidden="true"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--light-text-color)] bg-[#010202] text-[var(--light-text-color)] sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-[50px] lg:w-[50px]"
//                 >
//                   <i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i>
//                 </a>
//               </li>
//               <li className="">
//                 <a
//                   href="#"
//                   className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--light-text-color)] bg-[#010202] text-[var(--light-text-color)] sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-[50px] lg:w-[50px]"
//                 >
//                   <i className="fa-regular fa-envelope text-lg" aria-hidden="true"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--light-text-color)] bg-[#010202] text-[var(--light-text-color)] sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-[50px] lg:w-[50px]"
//                 >
//                   <i className="fa-brands fa-youtube text-lg" aria-hidden="true"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-[var(--light-text-color)]/[20%] mt-11 border-t pt-4 sm:mt-16 sm:pt-7">
//           <div className="flex flex-col items-center justify-between md:flex-row">
//             <p className="text-center text-base font-normal leading-7 text-[var(--light-text-color)] sm:text-left sm:text-sm lg:text-base">
//               © 2025 RAVEN AND REBEL CLEANING CO. All Rights Reserved.
//             </p>
//             <ul className="hidden items-center gap-2">
//               <li>
//                 <a
//                   href="#"
//                   className="block text-base font-normal text-[var(--light-text-color)] lg:text-lg"
//                 >
//                   {" "}
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <span className="block text-base font-normal text-[var(--light-text-color)] lg:text-lg">
//                   {" "}
//                   |
//                 </span>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block text-base font-normal text-[var(--light-text-color)] lg:text-lg"
//                 >
//                   {" "}
//                   Terms &amp; Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default footer;
