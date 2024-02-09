/* Css File*/
import './HotelStyle.css';

/* Icon File*/
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdAccessTime, MdForwardToInbox } from "react-icons/md";

/* Image import */
import logo from './Image/asset 1.png';
import s1 from './Image/asset 54.jpeg';
import subt from './Image/titel_img.svg';
import view1 from './Image/asset 10.jpeg';
import view2 from './Image/asset 11.jpeg';
import view3 from './Image/asset 12.jpeg';
import oview from './Image/asset 15.jpeg';
import bg1 from './Image/asset 60.png';
import team1 from './Image/asset 47.jpeg';
import team2 from './Image/asset 48.jpeg';
import team3 from './Image/asset 49.jpeg';
import spe_dish from './Image/asset 18.jpeg';
// import bg2 from './Image/asset 59.jpeg'



export default function Hotel() {
    return (
        <>

            {/* Header section Start*/}

            <header>
                <div className='container'>
                    <div className='top_info'>
                        <ul className='d-flex'>
                            <li><a href=""><IoLocationOutline style={{ fontSize: "16px", color: "var(--gray)" }} /> Restaurant St, Delicious City, London 9578, UK</a></li>
                            <li><a href=""><MdAccessTime style={{ fontSize: "16px", color: "var(--gray)", margin: "0px 5px" }} /> Daily : 8.00 am to 10.00 pm</a></li>
                        </ul>
                        <ul className='d-flex'>
                            <li><a href=""><LuPhoneCall IoLocationOutline style={{ fontSize: "16px", color: "var(--gray)", margin: "0px 10px" }} /> +1 123 456 7890</a></li>
                            <li><a href=""><MdForwardToInbox IoLocationOutline style={{ fontSize: "16px", color: "var(--gray)", margin: "0px 10px" }} />Booking@restaurant.com</a></li>
                        </ul>
                    </div>
                    <div className='nav_menu'>
                        <div className='img'>
                            <img src={logo}></img>
                        </div>
                        <nav>
                            <ul className='main_menu d-flex'>
                                <li><a href="">HOME</a></li>
                                <li><a href="">MENU</a></li>
                                <li><a href="">ABOUT US</a></li>
                                <li><a href="">OUR CHEFS</a></li>
                                <li><a href="">PAGE</a></li>
                                <li><a href="">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Header section End*/}

            {/* Slider section Start*/}

            <section>
                <div className='slider'>
                    <img src={s1}></img>
                </div>
                <div className='title'>
                    <span className='hd'>DELIGHTFUL EXPERIENCE</span>
                    <img src={subt} className='img1'></img>
                </div>
            </section>

            {/* Slider section End*/}


            {/* Veiw menu section Start*/}

            <section className='space-y'>
                <div className='container'>
                    <div className='veiw_menu'>
                        <div className='title1'>
                            <span className='hd1'>DELIGHTFUL EXPERIENCE</span>
                            <img src={subt} className='img1'></img>
                        </div>
                        <div className='heading'>
                            <h2>We Offer Top Notch</h2>
                        </div>
                        <div className='boxs d-flex'>
                            <div className='box'>
                                <img src={view1} className='bg2'></img>
                                <h3>Breakfast</h3>
                                <div className='btn3'><a>view menu</a></div>
                                
                            </div>
                            <div className='box'>
                                <p>Lorem Ipsum  industry lorem Ipsum has been the industrys standard dummy text ever.
                                </p>
                                <img src={view2}></img>
                                <h3>Appetizers</h3>
                                <div className='btn3'><a>veiw menu</a></div>
                                
                            </div>
                            <div className='box'>
                                <img src={view3}></img>
                                <h3>Drinks</h3>
                                <div className='btn3'><a>view menu</a></div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Veiw mwnu section End*/}



            {/* OUR STORY section Start */}

            <section className='space-y oview'>
                <div className='container'>
                    <div className='our_story d-flex'>
                        <div className='box'>
                            <h2 className='hd2'>OUR STORY</h2>
                            <div className='title2'>
                                <img src={subt} className='img2'></img>
                            </div>
                            <h2 className='main_h2'>Every Flavor Tells a Story</h2>
                            <p>Lorem Ipsum is simply dummy text of the
                                printingand typesetting industry lorem Ipsum has been
                                the industrys standard dummy text ever since the when an unknown printer
                                took a galley of type and scrambled it to make a type
                                specimen book It has survived not only five centuries, but also the leap into.
                            </p>
                            <div className='box1'>
                                <h4>Book Through Call</h4>
                                <a>+80 (400) 123 4567</a>
                                <div>Read More</div>
                            </div>
                        </div>
                        <div className='box'>
                            <img src={oview}></img>
                            {/* <img src={bg1} className='bg1'></img> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR STORY section End */}







            {/* EXPERIENCED TEAM section Start*/}

            <section className='space-y'>
                <div className='container'>
                    <div className='team'>
                        <div className='title1'>
                            <span className='hd1'>DELIGHTFUL EXPERIENCE</span>
                            <img src={subt} className='img1'></img>
                        </div>
                        <h2>Meet Our Chef</h2>
                        <div className='team_box d-flex'>
                            <div className='t_box'>
                                <img src={team1}></img>
                                <div className='t_box1'>
                                    <h3>Willium Joe</h3>
                                    <a>MASTER CHEF</a>
                                    <p>Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.</p>
                                </div>
                            </div>
                            <div className='t_box'>
                                <img src={team2}></img>
                                <div className='t_box1'>
                                    <h3>Willium Joe</h3>
                                    <a>MASTER CHEF</a>
                                    <p>Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.</p>
                                </div>
                            </div>
                            <div className='t_box'>
                                <img src={team3}></img>
                                <div className='t_box1'>
                                    <h3>Willium Joe</h3>
                                    <a>MASTER CHEF</a>
                                    <p>Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCED TEAM section Endc */}





            {/* SPECIAL DISH section Start */}

            <section className='space-y spe_main'>
                <div className='container'>
                    <div className='spe_dish d-flex'>
                        <div className='spe_box1'>
                            <img src={spe_dish} className='img'></img>
                        </div>
                        <div className='spe_box2'>
                            <h2 className='spe_hd'>SPECIAL DISH</h2>
                            <div className='spe_title'>
                                <img src={subt} className='spe_img'></img>
                            </div>
                            <h2 className='spe_hd1'>Lobster Tortellini</h2>
                            <p>Lorem Ipsum is simply dummy text of the printingand typesetting industry 
                                lorem Ipsum has been the industrys standard dummy
                                 text ever since the when an unknown printer took a galley of type.
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printingand typesetting industry 
                                lorem Ipsum has been the industrys standard dummy
                                 text ever since the when an unknown printer took a galley of type.
                            </p>
                            <h3>$2000.00</h3>
                            < div className='spe_btn'>
                                <a href="" className='spe_btn1'>view all menu</a>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* SPECIAL DISH section End */}


            {/* bg2 section Start */}
            <section className='space-y fixed '>
                <div className='bg2'>
                </div>
            </section>
            {/* bg2 DISH section End */}



            {/* Footer section Star */}
            <footer className=' ft_img speace-y'>
                <div className='container'>
                    <div className='main_footer d-flex'>
                        <div className='f1'>
                            <ul className='main_menu'>
                                <li><a href="">HOME</a></li>
                                <li><a href=''>ABOUT US</a></li>
                                <li><a href=''>MENUS</a></li>
                                <li><a href=''>OUR CHEFS</a></li>
                                <li><a href=''>CONTACT</a></li>
                            </ul>
                        </div>
                        <div className='f2'>
                            <img src={logo}></img>
                            <div className='box2'>
                                <h3>Restaurant St, Delicious City, London 9578, UK</h3>
                                <a>booking@domainname.com</a>
                                <a>Booking Request : +88-123-123456</a>
                                <a>Open : 09:00 am - 01:00 pm</a>
                            </div>
                            <h2>Get News & Offers</h2>
                            <p>Subscribe us & Get 25% Off.</p>
                            <div className='input d-flex'>
                                <input type='text' placeholder='ENTER EMAIL'></input>
                                <div className='btn'><a href=''>Subscribe</a></div>
                            </div>
                        </div>
                        <div className='f3'>
                            <ul className='main_menu'>
                                <li><a href="">INSTAGRAM</a></li>
                                <li><a href=''>FACHBOOK</a></li>
                                <li><a href=''>TWITTER</a></li>
                                <li><a href=''>YOUTUBE</a></li>
                                <li><a href=''>GOOGLE MAP</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer section End */}





        </>
    )
}
