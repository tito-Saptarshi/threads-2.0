// import {
//     generateUploadButton,
//     generateUploadDropzone,
//   } from "@uploadthing/react";
   
//   import type { OurFileRouter } from "@/app/api/uploadthing/core";
   
//   export const UploadButton = generateUploadButton<OurFileRouter>();
//   export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// import { generateComponents } from "@uploadthing/react";
 
// import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
// export const { UploadButton, UploadDropzone } =
//   generateComponents<OurFileRouter>();

import { generateReactHelpers } from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();