"use client"

import { useState, useEffect } from "react"

export async function UserListPage (){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/base/base-users');
                if (!response.ok) {
                    throw new Error(`Erro ao obter a lista de usuários: ${response.statusText}`);
                }

                const data = await response.json();
                // Certifique-se de que a estrutura de resposta corresponde ao esperado
                setUsers(data.usuarios || []);
            } catch (error) {
                console.error('Erro ao obter a lista de usuários:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                        {/* Adicione mais colunas conforme necessário */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.senha}</td>
                            <td>{user.telefone}</td>
                            <td>{user.cidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
