'use client';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import UserCard from './usercard';

export default function Home() {
  // Estado agora armazena objetos com ID e nome em vez de JSX diretamente
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);

  function add() {
    // Adiciona um novo usuário com um UUID único
    setUsers([...users, { id: uuidv4(), name: uuidv4() }]);
  }

  function del(uuid: string) {
    console.log(uuid);
    console.log(users);
    // Filtra os usuários para remover o que tem o ID correspondente
    setUsers(users.filter(user => user.id !== uuid));
    console.log(users);
  }

  return (
    <div className="h-screen min-h-fit w-screen bg-fuchsia-300 flex items-center justify-center text-white">
      <div className="w-1/3 bg-fuchsia-950 flex flex-col justify-center items-center p-10 gap-10 rounded-3xl">
        <div>USERS</div>

        {/* Renderiza os cards de usuário */}
        <div className='w-full'>
          {users.map(user => (
            // Passa o ID e a função del corretamente para o componente UserCard
            <UserCard key={user.id} id={user.id} name={user.name} del={del} />
          ))}
        </div>

        <button className="bg-fuchsia-900 p-2 w-full" onClick={add}>
          ADD
        </button>
      </div>
    </div>
  );
}
