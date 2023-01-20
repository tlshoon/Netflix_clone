import React,{ useState, useEffect } from 'react'
import "./Nav.css"

export default function Nav() {
    const [show,setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50){
                setShow(true);
            }else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll", () => {});  // 컴포넌트를 사용 안 할 때는 리무브
        };
    }, []);

    


  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            alt = "Netflix logo"
            src = "https://velog.velcdn.com/images/sjhh0105/post/04aa7c08-4b6d-4811-9408-d3a3f2109a19/image.png"
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <img 
            alt = "user logged"
            src = "https://pbs.twimg.com/media/DmBraqkXcAA1Yco?format=jpg&name=360x360"
            className= 'nav__avatar'     
        />
    </nav>
  )
}
