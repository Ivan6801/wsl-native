import { USER } from "./users";

export const POSTS = [
  {
    imageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
    user: USER[0].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts. 😂❤",
    profile_picture: USER[0].image,
    comments: [
      {
        user: "theqazman",
        comment: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      },
      {
        user: "amaanath.dev",
        comment: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
    user: "Kevin12",
    likes: 7870,
    caption: "Train Ride to Hogwarts. 😂❤",
    profile_picture: USER[0].image,
    comments: [
      {
        user: "theqazman",
        comment: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      },
      {
        user: "amaanath.dev",
        comment: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      },
    ],
  },
];
