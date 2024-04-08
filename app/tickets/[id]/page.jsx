
const getTicket = async (id) => {
    const res = await fetch("http://localhost:4000/tickets/" + id,{
      next : {
          revalidate: 30
      }
    });
    return res.json();
  };

const Ticket = async ({params}) => {
     const ticket = await getTicket(params.id)
  return (
     <main>
        
     </main>
  )
}

export default Ticket
