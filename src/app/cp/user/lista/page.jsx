"use client"

import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from "next/link"

export default function UserListPage (){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/base/base-users');
                if (!response.ok) {
                    throw new Error(`Erro ao obter a lista de usuários: ${response.statusText}`);
                }

                const data = await response.json();
      
                setUsers(data.usuarios || []);
            } catch (error) {
                console.error('Erro ao obter a lista de usuários:', error);
            }
        };

        fetchUsers();
    }, []);

    function getRandomIconComponents() {
        const allIcons = [FaGithub, FaLinkedin, FaInstagram, FaYoutube];
        const shuffledIcons = allIcons.sort(() => 0.5 - Math.random());
        return shuffledIcons.slice(0, 2);
      }
    
      function getIconLink(Icon, user) {
        switch (Icon) {
          case FaGithub:
            return 'github'; 
          case FaLinkedin:
            return 'linkedin';
          case FaInstagram:
            return 'instagram';
          case FaYoutube:
            return 'youtube';
          default:
            return '#';
        }
      }
    
    return (
        <div className=" h-auto  bg-purple-600  flex flex-col items-center justify-center font-sans text-center">
        <h1 className="m-4 text-3xl text-white font-bold">Lista de Usuários</h1>

        <table className="bg-purple-300 mb-4 border-collapse border-4 border-purple-800">
          <thead className="bg-purple-600 text-white">
            <tr className="">
              <th className="border border-purple-800 p-2">Nome</th>
              <th className="border border-purple-800 p-2">Email</th>
              <th className="border border-purple-800 p-2">Senha</th>
              <th className="border border-purple-800 p-2">Telefone</th>
              <th className="border border-purple-800 p-2">Cidade</th>
              <th className="border border-purple-800 p-2">Redes</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-purple-800 p-2">{user.nome}</td>
                <td className="border border-purple-800 p-2">{user.email}</td>
                <td className="border border-purple-800 p-2">{user.senha}</td>
                <td className="border border-purple-800 p-2">{user.telefone}</td>
                <td className="border border-purple-800 p-2">{user.cidade}</td>
                <td className="border border-purple-800 p-2 text-purple-800 flex">
                  {getRandomIconComponents().map((Icon, index) => {
                    const iconLink = getIconLink(Icon, user);
                    return (
                      <a
                        key={index}
                        href={`https://${iconLink}.com/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      
      
      
    
    );
};
