import {BiLogoGmail} from 'react-icons/bi'
import {BsFillTelephoneFill, BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div class="foot">
        <div class="foot1">
            <div class="fooitem">
                <h2>About</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           
            </div>
                            
                    <div class="fooitem">
                        <h2>Have a Questions?</h2>
                        <div class="rer">
                        <ul>
                            <li><a href="#"><i class="fa-solid fa-location-dot"></i>203 Fake St. Mountain View, San Francisco, California, USA</a></li>
                            <li><a href="#"><i class="fa-solid fa-phone"></i>+20 1006649974</a></li>
                            <li><a href="#"><i class="fa-solid fa-envelope"></i>youssefessam116@gmail.com</a></li>
                        </ul>
                    </div>
                    </div> 
        </div>
    </div>
    <div class="foocen">
        <p>Copyright ©2023 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i>  by Colorlib</p>

    </div>

</footer>
  )
}

export default Footer