import { CgMathPlus } from "react-icons/cg";
import './App.css'

function App() {
  

  return (
    <>
      <div className='container-name'>
<h1>Your Clients <CgMathPlus /></h1>
      </div>
      <div className="container-info">
      <select className="info-name" name="opcoes">
  <option  value="opcao1">John Graham
  <option value="people" data-img="https://th.bing.com/th/id/R.fad296e2436f5331cabf743bd54a7657?rik=Cy57hoItHWHJlQ&riu=http%3a%2f%2fwww.kamillus.be%2fsites%2fdefault%2ffiles%2fstyles%2fstyle_wie_is_wie%2fpublic%2f2020-04%2fPerson_icon-icons.com_51960_4.png%3fitok%3dOM0ErW_A&ehk=4cXxlnNtOUr717rq008IkECtdUf6cBKmSjdBkfA4CAM%3d&risl=&pid=ImgRaw&r=0"></option>
    </option>

</select>
<select  className="info-name" name="opcoes">
  <option value="opcao1">Melba Larson</option>
  <img src="https://th.bing.com/th/id/R.fad296e2436f5331cabf743bd54a7657?rik=Cy57hoItHWHJlQ&riu=http%3a%2f%2fwww.kamillus.be%2fsites%2fdefault%2ffiles%2fstyles%2fstyle_wie_is_wie%2fpublic%2f2020-04%2fPerson_icon-icons.com_51960_4.png%3fitok%3dOM0ErW_A&ehk=4cXxlnNtOUr717rq008IkECtdUf6cBKmSjdBkfA4CAM%3d&risl=&pid=ImgRaw&r=0"/>
</select>
<select  className="info-name" name="opcoes">
  <option value="opcao1">Mary Borer</option>
</select>
<select  className="info-name" name="opcoes">
  <option value="opcao1">Tamara Labadie</option>
</select>
<select  className="info-name" name="opcoes">
  <option value="opcao1">tracy Walker</option>
</select>
<select  className="info-name" name="opcoes">
  <option value="opcao1">Bradford Mills</option>
</select>
      </div>
        
    </>
  )
}

export default App
