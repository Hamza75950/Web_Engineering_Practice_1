import "./App.css";
import logo from "./logo.svg"
;
        

function App() {

const list = [
  {
    id:1,
    firstName:"Hamza",
    lastName:"Khan",
    phone:'03120270491',
    img:logo
  },
  {
    id:2,
    firstName:"Umer",
    lastName:"Khan",
    phone:'0312027',
    img:logo

  }
]

  return (

    <div className="container mx-auto" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
  <table className="table-auto" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '900px', boxShadow: '0 2px 15px rgba(0,0,0,0.1)' }}>
    <caption className="caption-top" style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'left', padding: '10px 0' }}>
      Table 3.1: Professional wrestlers and their signature moves.
    </caption>
    <thead>
      <tr style={{ backgroundColor: '#f4f7fc', color: '#333' }}>
        <th style={{ padding: '15px', textAlign: 'center', fontWeight: '600', fontSize: '1rem', borderBottom: '2px solid #e5e7eb' }}>ID</th>
        <th style={{ padding: '15px', textAlign: 'center', fontWeight: '600', fontSize: '1rem', borderBottom: '2px solid #e5e7eb' }}>Name</th>
        <th style={{ padding: '15px', textAlign: 'center', fontWeight: '600', fontSize: '1rem', borderBottom: '2px solid #e5e7eb' }}>Phone</th>
        <th style={{ padding: '15px', textAlign: 'center', fontWeight: '600', fontSize: '1rem', borderBottom: '2px solid #e5e7eb' }}>Image</th>
      </tr>
    </thead>
    <tbody>
      {list.map((item, index) => (
        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fafb' : '#ffffff', transition: 'background-color 0.3s' }}>
          <td style={{ padding: '15px', textAlign: 'center', verticalAlign: 'middle', borderBottom: '1px solid #e5e7eb' }}>{item.id}</td>
          <td style={{ padding: '15px', textAlign: 'center', verticalAlign: 'middle', borderBottom: '1px solid #e5e7eb' }}>{item.firstName + " " + item.lastName}</td>
          <td style={{ padding: '15px', textAlign: 'center', verticalAlign: 'middle', borderBottom: '1px solid #e5e7eb' }}>{item.phone}</td>
          <td style={{ padding: '15px', textAlign: 'center', verticalAlign: 'middle', borderBottom: '1px solid #e5e7eb' }}>
            <img src={item.img} alt="#" style={{ borderRadius: '8px', maxHeight: '50px', objectFit: 'cover' }} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>





  //   <div className="container mx-auto ml-10" style={{display: 'flex',justifyContent:'center', marginTop:'50px'}}>
      

  //     <table className="table-auto border border-slate-500" >
  //     <caption className="caption-top mb-5" style={{marginBottom:"20px"}}>
  //   Table 3.1: Professional wrestlers and their signature moves.
  // </caption>
  //     <thead>
  //       <tr>
  //         <th className="border border-slate-600 " style={{padding:'15px'}}>ID</th>
  //         <th className="border border-slate-600" style={{padding:'15px'}} >Name</th>
  //         <th className="border border-slate-600" style={{padding:'15px'}}>Phone</th>
  //         <th className="border border-slate-600" style={{padding:'15px'}}>Image</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {list.map((item, index) => (
  //         <tr className="border border-slate-700 "  key={index}>
  //           <td className="border border-slate-700 " style={{ textAlign: 'center', verticalAlign: 'middle' , padding:'5px' }} >{item.id}</td>
  //           <td className="border border-slate-700" style={{ textAlign: 'center', verticalAlign: 'middle', padding:'5px' }}>{item.firstName +" "+ item.lastName}</td>
  //           <td className="border border-slate-700" style={{ textAlign: 'center', verticalAlign: 'middle' , padding:'5px' }}>{item.phone}</td>
  //           <td className="border border-slate-700" style={{ textAlign: 'center', verticalAlign: 'middle' , padding:'5px' }}>
  //             <img src={item.img} alt="#" />
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
     
    // </div>
  )
}

export default App;
