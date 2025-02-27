import das1 from "../assets/das1.png"
import das2 from "../assets/das2.png"
const DoctorHome = () =>{
    return(
        <>
      <div  className="apoint" style={{width:"1020px"}}>
            <h1>Welcome Doctor </h1>
            <div className="das" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
                <h1>Name :{localStorage.getItem("name")}</h1>
                <h1>Email :{localStorage.getItem("email")}</h1>
            </div>
            <img src="https://wpthemesgrid.com/themes/medikit/img/section-img.png" alt="" />
         </div>

         <div className="dasimg">
           <img src= {das1} alt="" style={{height:"450px",width:"600px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"30px",borderRadius:"20px"}}/>
           <img src= {das2} alt="" style={{height:"450px",width:"300px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"30px",borderRadius:"20px"}} />
         </div>
        </>
    )
}

export default DoctorHome