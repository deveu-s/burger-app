import src1 from '../assets/burgerlogo.jpg'
function NavBar(){
	return <>
    <nav className="navbar navbar-expand-lg color-nav" >
      <div className="collapse navbar-collapse justify-content-between  " >
        <img src={src1} width="70" height="70" alt="myBurger"></img>
        <div className='my-2 my-lg-0 justify-content-center'>
          <button class="btn my-2 my-sm-0 text-white" type="submit">Burger Builder</button>
          <button class="btn my-2 my-sm-0 text-white" type="submit">Login</button>
        </div>
      </div>
    </nav>
  </>
}

export default NavBar