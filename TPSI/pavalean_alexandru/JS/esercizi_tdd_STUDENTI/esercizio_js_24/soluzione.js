export const protect_email = (email) => {
      const [hostName, dominio] = email.split('@');
   const offuscato = hostName.length > 12 ? hostName.slice(0, 7) + '...' : hostName.length < 12 && '.' in hostName ? hostName.slice(0, 3) + '...' : hostName;
   return `${offuscato}@${dominio}`;
};
