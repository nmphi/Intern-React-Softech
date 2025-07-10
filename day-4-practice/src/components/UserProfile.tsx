// src/components/UserProfile.js
import React from 'react';
interface Person{
    name: string
    age: number
    bio: string
}
const UserProfile = ({ name, age, bio }: Person) => {
  return (
    <div>
      <p>Hello, I am {name} and I am {age} years old.</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
