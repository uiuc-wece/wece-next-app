// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
//     <meta name="title" content="WECEHacks 2024">
//     <meta name="description" content="WECE's Annual Hackathon">
//     <meta name="author" content="WECEHacks">
//     <meta name="keywords" content="WECEHacks">
//     <meta property="og:image" content="https://wecehacks.ctfd.io/files/66dbf2a715b9dcf964de2c15655cb756/WECE_Hacks_Presentations_5.png">
//     <meta property="og:image:width" content="width_in_pixels">
//     <meta property="og:image:height" content="height_in_pixels">
//     <title>WECE Hacks 2024</title>
// </head>

// <body>
//     <script>
//         window.location.href = "https://wecehacks.github.io/2024/index.html";
//     </script>
// </body>

// </html>

import { useEffect } from "react";

const Wecehacks = () => {
  useEffect(() => {
    // Redirect the user when the component mounts
    window.location.href = "https://wecehacks.github.io/2024/index.html";
  }, []); // Empty dependency array means this runs only once when the component is mounted

  return null; // This component doesn't need to render anything
};

export default Wecehacks;
