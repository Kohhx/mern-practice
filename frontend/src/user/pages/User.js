import React from "react";

import UsersList from "../components/UsersList";

const User = () => {
  const User = [
    {
      id: "u1",
      name: "Kohhx",
      image:
        "https://scontent.fsin4-1.fna.fbcdn.net/v/t31.18172-1/13308474_10154274149753184_7695826561350614511_o.jpg?stp=c45.0.160.160a_dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=3qjRObBZCB0AX8qMjDc&_nc_ht=scontent.fsin4-1.fna&oh=00_AT9wZN6Wtw6CqE7UNAKKc38kQAupSJM5nquttIImv9wSsg&oe=636A69F9",
      place: 3,
    },
    // {
    //     id: "u2",
    //     name: "LiKy",
    //     image:
    //       "https://scontent.fsin4-1.fna.fbcdn.net/v/t31.18172-1/13308474_10154274149753184_7695826561350614511_o.jpg?stp=c45.0.160.160a_dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=3qjRObBZCB0AX8qMjDc&_nc_ht=scontent.fsin4-1.fna&oh=00_AT9wZN6Wtw6CqE7UNAKKc38kQAupSJM5nquttIImv9wSsg&oe=636A69F9",
    //     place: 1,
    //   },
  ];

  return <UsersList items={User} />;
};

export default User;
