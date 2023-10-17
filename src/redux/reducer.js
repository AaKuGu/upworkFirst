"use client";

import { createReducer } from "@reduxjs/toolkit";

// localhost:3000/
// on the / page, in order to show signin component or not
export const showSignInComponentBoolean_reducer = createReducer(
  false,
  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );

    builder
      .addCase("showSignInComponentBoolean_action", (state) => {
        return (state = !state);
      })
      .addDefaultCase((state) => state);
  }
);

//
//
//
//
//
//
//
// localhost:3000/dashboard

// localhost:3000/dashboard exact
// when somebody clicks on the design , a popup will be opened which will have the design and text related to that design
export const showModelBoolean_reducer = createReducer(false, (builder) => {
  // console.log(
  //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
  //   showSignInComponentBoolean_reducer
  // );

  builder
    .addCase("showModelBooleanTrue_action", (state) => {
      return (state = true);
    })
    .addCase("showModelBooleanFalse_action", (state) => {
      return (state = false);
    })
    .addDefaultCase((state) => state);
});

// localhost:3000/dashboard/designs / all designs
// following redux state will store all the designs data
export const designsInfo_reducer = createReducer(
  [
    {
      name: "Abstract",
      likesCount: "233",
      designId: "djfksje9389384",
      state: true,
      image: "/tempDesignImages/one.png",
      details:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "man",
    },
    {
      name: "Pal",
      designId: 2,
      state: true,
      image: "/tempDesignImages/two.png",
      likesCount: "23",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "bird",
    },
    {
      name: "Pal",
      designId: 3,
      likesCount: "33",
      state: true,
      image: "/tempDesignImages/three.png",
      details: " ",
      category: "man",
    },

    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/four.png",
      name: "Game",
      likesCount: "23",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/five.png",
      name: "Pal",
      likesCount: "238",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/one.png",
      name: "Pal",
      likesCount: "1233",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/two.png",
      name: "Pal",
      likesCount: "73",
      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/three.png",
      name: "Pal",
      likesCount: "283",
      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/four.png",
      name: "Pal",
      likesCount: "3",
      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/five.png",
      name: "Pal",
      likesCount: "33",
      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/one.png",
      name: "Pal",
      likesCount: "43",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/two.png",
      name: "Pal",
      likesCount: "30",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/three.png",
      name: "Pal",
      likesCount: "2033",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/four.png",
      name: "Pal",
      likesCount: "77",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/five.png",
      name: "Pal",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
  ],
  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );

    builder
      .addCase("designsInfo_action", (state, { payload }) => {
        return (state = payload);
      })

      .addDefaultCase((state) => state);
  }
);
// export const showModelDesignerCreateBoolean_reducer = createReducer(
//   false,
//   (builder) => {
//     // console.log(
//     //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
//     //   showSignInComponentBoolean_reducer
//     // );

//     builder
//       .addCase("showModelDesignerCreateBooleanTrue_action", (state) => {
//         return (state = true);
//       })
//       .addCase("showModelDesignerCreateBooleanFalse_action", (state) => {
//         return (state = false);
//       })
//       .addDefaultCase((state) => state);
//   }
// );

// localhost:3000/dashboard/model
export const selectedDesignCardInfo_reducer = createReducer(
  {
    id: 1,
    state: true,
    image:
      "https://cdn.pixabay.com/photo/2023/10/06/07/06/girl-8297585_1280.png",
    details:
      "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
  },
  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );

    builder
      .addCase("selectedDesignCardInfo_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

// localhost:3000/dashboard/designs/model pop up/design route
// following function is to set the loved design or not loved design
export const loveReactPerDesign_reducer = createReducer(false, (builder) => {
  // console.log(
  //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
  //   showSignInComponentBoolean_reducer
  // );

  builder
    .addCase("selectedDesignCardInfo_action", (state, { payload }) => {
      return (state = payload);
    })
    .addDefaultCase((state) => state);
});

// localhost:3000/dashboard/sidebar
// following state will select among the designs, purchased designs,payments and support buttons
export const sidebarSelectedButton_reducer = createReducer(
  { id: 1, label: "Designs", name: "designs" },
  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );

    builder
      .addCase("sidebarSelectedButton_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

// localhost:3000/dashboard/purchasedDesigns
export const purchasedDesignsData_reducer = createReducer(
  [
    {
      state: true,
      image: "",
    },
    {
      state: true,
      image: "",
    },
    {
      state: true,
      image: "",
    },
  ],
  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );

    builder
      .addCase("purchasedDesignsData_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

// localhost:3000/dashboard/
// all the designs of the design button in the sidebar on the dashboard page , the complete information is here
// export const designsInfo_reducer = createReducer(
//   {
//     state: true,
//     image: "",
//   },
//   (builder) => {
//     // console.log(
//     //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
//     //   showSignInComponentBoolean_reducer
//     // );

//     builder
//       .addCase("designsInfo_action", (state, { payload }) => {
//         return (state = payload);
//       })
//       .addDefaultCase((state) => state);
//   }
// );

// localhost:3000/dashboard/createADesign
// following will have the data which the user will designer will create on the createADesign page
export const createADesignData_reducer = createReducer(
  {
    category: "",
    desc: "",
    designImage: "",
    designFiles: "",
    userId: "",
  },
  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );
    builder
      .addCase("createADesignData_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

// localhost:3000/dashboard/Your designs
// following will have the approved designs compolete details by the admin,
export const designerApprovedDesignsData_reducer = createReducer(
  [
    {
      name: "Abstract",
      likesCount: "233",
      designId: "djfksje9389384",
      state: true,
      image: "/tempDesignImages/one.png",
      details:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "man",
    },
    {
      name: "Pal",
      designId: 2,
      state: true,
      image: "/tempDesignImages/two.png",
      likesCount: "23",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "bird",
    },
    {
      name: "Pal",
      designId: 3,
      likesCount: "33",
      state: true,
      image: "/tempDesignImages/three.png",
      details: " ",
      category: "man",
    },

    {
      designId: 11,
      state: true,
      image: "/tempDesignImages/four.png",
      name: "Game",
      likesCount: "23",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "women",
    },
  ],
  (builder) => {
    builder
      .addCase("designerApprovedDesignsData_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

//following will have pending designs complete details
export const designerPendingDesignsData_reducer = createReducer(
  [
    {
      name: "Abstract",
      likesCount: "233",
      designId: "djfksje9389384",
      state: true,
      image: "/tempDesignImages/one.png",
      details:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "man",
    },
    {
      name: "Pal",
      designId: 2,
      state: true,
      image: "/tempDesignImages/two.png",
      likesCount: "23",

      details:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
      category: "bird",
    },
  ],
  (builder) => {
    builder
      .addCase("designerPendingDesignsData_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

// localhost:3000/dashboard/admin/review design
//following will have the pending reviews for the admin
export const adminPendingReviewsData_reducer = createReducer(
  [
    {
      id: 1,
      userDetails: {
        id: 1,
        // id: 1, from the backend will be user
        name: "Aadarsh Gupta",
        phoneNumber: 1111111111,
        email: "aadarsh@gmail.com",
        country: "India",
        state: "Himanchar Pradesh",
        city: "Mirzapur",
        role: "Designer",
      },

      designs: [
        {
          id: 1,
          state: true,
          image:
            "https://cdn.pixabay.com/photo/2023/10/06/07/06/girl-8297585_1280.png",
          details:
            "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
        },
        {
          id: 2,
          state: true,
          image:
            "https://cdn.pixabay.com/photo/2023/10/06/07/06/girl-8297585_1280.png",
          details:
            "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
        },
        {
          id: 3,
          state: true,
          image: "",
          details: " ",
        },
        {
          id: 4,
          state: true,
          image: "",
          details: " ",
        },
      ],
    },
    {
      id: 2,
      userDetails: {
        id: 2,
        // id: 1, from the backend will be user
        name: "Mohit Gupta",
        phoneNumber: 1111111111,
        email: "Mohit@gmail.com",
        country: "India",
        state: "Himanchar Pradesh",
        city: "Mirzapur",
        role: "Designer",
      },
      designs: [
        {
          id: 1,
          state: true,
          image:
            "https://cdn.pixabay.com/photo/2023/10/06/07/06/girl-8297585_1280.png",
          details:
            "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
        },
        {
          id: 2,
          state: true,
          image:
            "https://cdn.pixabay.com/photo/2023/10/06/07/06/girl-8297585_1280.png",
          details:
            "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo sed sapien bibendum laoreet. Nulla facilisi. Aenean accumsan tincidunt leo, eget convallis odio accumsan in. Suspendisse vel tortor non sapien facilisis tincidunt. Mauris at diam in nisl lacinia aliquet. Vestibulum feugiat purus sed mauris bibendum, id scelerisque urna lacinia. Vivamus ac lorem ut sapien condimentum tincidunt. Sed quis tellus a urna tempus pellentesque. Donec placerat, odio sit amet eleifend iaculis, ipsum augue pretium nisl, non elementum libero libero in eros. Etiam a tortor quam. Vivamus sit amet diam ac orci interdum iaculis.",
        },
        {
          id: 3,
          state: true,
          image: "",
          details: " ",
        },
        {
          id: 4,
          state: true,
          image: "",
          details: " ",
        },
      ],
    },
  ],
  (builder) => {
    builder
      .addCase("adminPendingReviewsData_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

// localhost:3000/dashboard/users/create a user, will be used for the backend
export const createAUserData_reducer = createReducer(
  {},

  (builder) => {
    builder
      .addCase("createAUserData_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

// localhost:3000/dashboard/admin/review design
//following will be storing the data of the particular design , which admin chose to review, this is because, when the router is /dashboard/designReview/designReviewEach?userId,DesignId,cardId, so on that page i dont need to run teh query agian to find which post is that , since the data will be already stored from /dashboard/designReview hence dont need to query again on this page, and deletion will be performed using cardid, userid, and designId
// export const adminChooseDesignReview_reducer = createReducer(
//   {},

//   (builder) => {
//     builder
//       .addCase("adminChooseDesignReview_action", (state, { payload }) => {
//         return (state = payload);
//       })
//       .addDefaultCase((state) => state);
//   }
// );

// localhost:3000/dashboard/users/create a user, will be used for the backend, not now
export const updateAUserData_reducer = createReducer({}, (builder) => {
  builder
    .addCase("updateAUserData_action", (state, { payload }) => {
      return (state = payload);
    })
    .addDefaultCase((state) => state);
});

// for all routes

// user is logged in or not
// export const userLoggedInBoolean_reducer = createReducer(false, (builder) => {
//   // console.log(
//   //   "🚀 ~ file: reducer.js:13 ~ userLoggedInBoolean_reducer=createReducer ~ userLoggedInBoolean_reducer:",
//   //   userLoggedInBoolean_reducer
//   // );

//   builder
//     .addCase("userLoggedInBoolean_action", (state) => {
//       return (state = !state);
//     })
//     .addDefaultCase((state) => state);
// });

// user details if here is logged in
export const loggedInUserDetails_reducer = createReducer(
  {
    id: 6,
    role: "admin",
    name: "Admin",
    phoneNumber: 3333333333,
    password: "3333333333",
    country: "India",
    email: "admin@gmail.com",
    state: "Himanchar Pradesh",
    city: "Mirzapur",
  },
  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );

    builder
      .addCase("loggedInUserDetails_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

export const loggedInUserId_reducer = createReducer(
  "skdfwekfskfks39403940",

  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );

    builder
      .addCase("loggedInUserDetails_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);

export const allUsersDetails_reducer = createReducer(
  [
    {
      id: 1,
      paid: true,
      role: "user",
      name: "Aadarsh Gupta",
      phoneNumber: 1111111111,
      email: "aadarsh@gmail.com",
      password: "1111111111",
      country: "India",
      state: "Himanchar Pradesh",
      city: "Mirzapur",
    },
    {
      id: 2,

      paid: true,
      role: "user",
      name: "Shivam",
      phoneNumber: 1111111111,
      password: "1111111111",
      email: "shivam@gmail.com",
      country: "United States",
      state: "Himanchar Pradesh",
      city: "Mirzapur",
    },
    {
      id: 3,
      role: "designer",
      name: "Rohit",
      phoneNumber: 2222222222,
      password: "2222222222",
      email: "rohit@gmail.com",
      country: "India",
      state: "Himanchar Pradesh",
      city: "Mirzapur",
    },
    {
      id: 4,
      role: "designer",
      name: "Suman",
      phoneNumber: 2222222222,
      password: "2222222222",
      country: "India",
      email: "suman@gmail.com",
      state: "Himanchar Pradesh",
      city: "Mirzapur",
    },
    {
      id: 5,
      role: "designer",
      name: "Mohit",
      phoneNumber: 2222222222,
      password: "2222222222",
      country: "India",
      email: "mohit@gmail.com",
      state: "Himanchar Pradesh",
      city: "Mirzapur",
    },
    {
      id: 6,
      role: "admin",
      name: "Admin",
      phoneNumber: 3333333333,
      password: "3333333333",
      country: "India",
      email: "admin@gmail.com",
      state: "Himanchar Pradesh",
      city: "Mirzapur",
    },
  ],

  (builder) => {
    // console.log(
    //   "🚀 ~ file: reducer.js:13 ~ constshowSignInComponentBoolean_reducer=createReducer ~ showSignInComponentBoolean_reducer:",
    //   showSignInComponentBoolean_reducer
    // );

    builder
      .addCase("allUsersDetails_action", (state, { payload }) => {
        return (state = payload);
      })
      .addDefaultCase((state) => state);
  }
);
