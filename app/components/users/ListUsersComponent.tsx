'use client';

import Image from 'next/image';
import { User } from '@prisma/client';
import React, { use } from 'react';

const getUsers = () =>
  fetch(`http://localhost:3000/api/users`).then((res) => res.json());

export default function ListUsersComponent() {
  let users = use<User[]>(getUsers());

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 20,
      }}
    >
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: '1px solid #ccc', textAlign: 'center' }}
        >
          <Image
            src={`https://robohash.org/${user.id}?set=set2&size=${180}x${180}`}
            alt={user.name}
            width={180}
            height={180}
          />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}
