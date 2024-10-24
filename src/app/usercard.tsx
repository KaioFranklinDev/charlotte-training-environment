interface UserCardProps {
    id: string;
    name: string;
    del: (id: string) => void; // A função del agora recebe o ID do usuário
  }
  
  export default function UserCard({ id, name, del }: UserCardProps) {
    return (
      <div className="flex flex-row gap-5 mt-5 bg-fuchsia-300 p-5 justify-around">
        <div>{name}</div>
        {/* Passa o ID correto quando o botão for clicado */}
        <button className="bg-fuchsia-600 p-1" onClick={() => del(id)}>
          DEL
        </button>
      </div>
    );
  }
  