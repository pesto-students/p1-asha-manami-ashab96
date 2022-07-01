
const  Header = ({choosePage}) => {
   function handleClick(event){
    console.log(event.target.innerText)
    choosePage(event.target.innerText);
   } 
   return(
    <div className='header'>
        <div className='logo'>
            <div className='logo-text' onClick ={handleClick}>
            Link Shortner
            </div>
        </div>
        <div className='menu'>
        <ul>
            <li onClick={handleClick}>Home</li>
            <li onClick={handleClick}>About Us</li>
            <li onClick={handleClick}>Vegan Policy</li>
            <li onClick={handleClick}>Contact Us</li>
          </ul>
        </div>
    </div>
   );
};

export { Header };