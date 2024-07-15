export const getUserById = (id: any) => {
  const token = localStorage.getItem('token');
  const baseUrl = 'https://localhost:7105';
    const url = `${baseUrl}/api/user/${id}`;

    const request = fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      }
  });
  return request;
};
