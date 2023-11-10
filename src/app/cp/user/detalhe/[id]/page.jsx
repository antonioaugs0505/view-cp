"use client"
import { useEffect, useState } from 'react';

export default function UserDetailsPage(){
    const [userDetails, setUserDetails] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const pathParts = window.location.pathname.split('/');
          const id = pathParts[pathParts.length - 1];
  
          console.log('Caminho da URL:', window.location.pathname);
          console.log('ID da URL:', id);
  
          if (!id) {
            console.error('ID não encontrado no caminho da URL');
            return;
          }
  
          const response = await fetch(`http://localhost:3001/cp/user/detalhe/${id}`);
          console.log('Resposta da API:', response);
  
          if (!response.ok) {
            console.error('Erro ao buscar detalhes do usuário:', response.status);
            return;
          }
  
          const data = await response.json();
          console.log('Dados do usuário encontrado:', data);
          setUserDetails(data);
        } catch (error) {
          console.error('Erro ao buscar detalhes do usuário:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {userDetails ? (
          <div>
            <h1>Detalhes do Usuário</h1>
            <p>ID: {userDetails.id}</p>
            <p>Nome: {userDetails.nome}</p>
            <p>Email: {userDetails.email}</p>
          </div>
        ) : (
          <p>Usuário não encontrado.</p>
        )}
      </div>
    );
  };
  