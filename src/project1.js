import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { PiCaretUpDownDuotone } from "react-icons/pi";
import Card from './Card';
import SingleCard from './SingleCard';
import Lengthcard from './Lengthcard';
import Lengthcard2 from './Lengthcard2';
import Lengthcard3 from './Lengthcard3';
function Project1() {
    return(
        <>
        <div className="first">
            <div className=" flex logo">
                <a href="#"> <img src='./amazonpics/ClipartKey_1478728.png' alt=""></img></a>
                <div className="map flex">
                    <MdLocationOn className='location' />
                    <div>
                        <span id="one">Deliver to</span>
                        <span id="two">India</span>
                    </div>
                </div>
            </div>

            <div className=" flex input">
                <div>
                    <span>All</span>
                    <FaCaretDown className="fas fa-caret-down" />
                </div>
                <input type="text"placeholder="Search Amazon"></input>
                <IoSearchSharp className="fas fa-search" />
            </div>
            
            <div className="flex right">
                <div className="flex lang">
                    <img src='./amazonpics/ClipartKey_2386898.png' alt=""></img>
                    <span>EN</span>
                    <FaCaretDown className="fas fa-caret-down" />
                </div>
            </div>
            <div className="flex sigin">
                <span id="three">Hello, sign in</span>
                <div className=" flex ac">
                    <span id="four">Account & Lists</span>
                    <FaCaretDown className="fas fa-caret-down" />
                </div>

            </div>
            <div className="flex sigin">
                <span id="three">Returns</span>
                <div className="order">
                    <span id="four"> &Orders</span>
                </div>
            </div>
            <div className=" flex cart">
                <LuShoppingCart className="fas fa-shopping-cart" />
                <span>Cart</span>
                <p>0</p>
            </div>
        </div>
        <div className='second'>
            <div className='menu-1'>
                <div>
                    <FaBars className='bar'/>
                    <span>All</span>
                </div>
            </div>

            <div className='menu-2'>
                <ul>
                    <li>Today's Deals</li>
                    <li>Registry</li>
                    <li>Customer Service</li>
                    <li>Gift Cards</li>
                    <li>Sel</li>
                </ul>
            </div>
        </div>
        <section className='sec-1'>
            <div className='container'>
                <div className='container-1'>
                    <div className='para'>
                        <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.</p>
                        <a href='#'>Click here to go to amazon.in</a>
                    </div>
                    <div className='product-con'>
                       <Card headding="Gaming accessries" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                       span1="Headsets"
                       img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                       span2="Keyboards"
                       img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                       span3="Mouse"
                       img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                       span4="Chair"
                       />
                       <SingleCard headding="Deals in PCs"
                       img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
                       />
                       <Card headding="Refresh your space" img1="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg"
                       span1="Dinning"
                       img2="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg"
                       span2="Home"
                       img3="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg"
                       span3="Kitchen"
                       img4="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg"
                       span4="Health and Beauty"
                       />
                       <SingleCard headding="Toys under $25"
                       img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
                       />
                    </div>
                    <div className='product-con-2'>
                       <Card headding="Shop deals in Fashion" img1="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
                       span1="Jeans under $50"
                       img2="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg"
                       span2="Tops under $25"
                       img3="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg"
                       span3="Dersses under $30"
                       img4="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg"
                       span4="Shoes under $50"
                       />
                       <SingleCard headding="Top Deal"
                       img1="https://m.media-amazon.com/images/I/51+0cmoq9vL._AC_SY230_.jpg"
                       />
                       <SingleCard headding="Lunar New Year"
                       img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/LunarNY/Fuji_Single_card_Lunar_New_Year_Graphics_1x_EN._SY304_CB585956471_.jpg"
                       />
                       <SingleCard headding="New year,now you"
                       img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/NYNY/Fuji_NYNY_Card_1x_12_Dec_EN._SY304_CB586552015_.jpg"
                       />
                    </div>
                </div>
            </div>
            <div className='image-box'>
                <div className='img'>
                    <img src='https://m.media-amazon.com/images/I/61gmkdtcyPL._SX1500_.jpg'></img>
                </div>
            </div>
            
        </section>
        <section className='sec-2'>
            <div className='product-con-3'>
                <Lengthcard headding="Deals on electronics, gadgets & accessories"
                    img1="https://m.media-amazon.com/images/I/41QcAwEXIgL._AC_SY200_.jpg"
                    span1="34% off"
                    p1="Deal"
                    h1="$399.99"
                    span2="List price:"
                    h2="$529.99"
                    p2="ZOTAC Gaming GeForce RTX™ 3060 Ti Twin Edge OC LHR 8GB GDDR6 256-bit 14 Gbps PCIE 4.0 Graphics Card, IceStorm 2.0 Advanced Cooling, Active Fan Control, Freeze Fan Stop ZT-A30610H-10MLHR"
                    img2="https://m.media-amazon.com/images/I/21bcVc77fEL._AC_SY200_.jpg"
                    span3="11% off"
                    p3="Deal"
                    h3="$399.00"                        
                    span4="List price:"
                    h4="$446.99"
                    p4="AMD Ryzen 9 5950X 16-core, 32-thread unlocked desktop processor"
                    img3="https://m.media-amazon.com/images/I/41WNOeu8OFL._AC_SY200_.jpg"                        
                    span5="31% off"
                     p5="Deal"
                    h5="$311.95"
                    span6="List price:"
                    h6="$449.99"
                    p6="MSI QHD Rapid-IPS Quantum DOT Gaming Non-Glare Super Narrow Bezel 1ms 2560 x 1440 165Hz Refresh Rate Adjustable Arm G-Sync Compatible 27” Gaming Monitor (Optix MAG274QRF-QD),Black"
                    img4="https://m.media-amazon.com/images/I/51gXubxoIbL._AC_SY200_.jpg"
                    span7="49% off"                        
                    p7="Deal"
                    h7="$23.15"
                    span8="List price:"
                    h8="$44.99"
                    p8="ESV Holy Bible, My Creative Bible For Girls, Hardcover w/Ribbon Marker, Illustrated Coloring, Journaling and Devotional Bible, English Standard Version, Purple Glitter"
                    img5="https://m.media-amazon.com/images/I/31Zy457VcpL._AC_SY200_.jpg"
                    span9="19% off"
                    p9="Deal"
                    h9="$48.89"
                    span10="List price:"
                    h10="$59.99"
                    p10="Everydrop by Whirlpool Ice and Water Refrigerator Filter 3, EDR3RXD1, Single-Pack"
                    img6="https://m.media-amazon.com/images/I/51QR6k5zpfL._AC_SY200_.jpg"
                    span11="35% off"
                    p11="Deal"
                    h11="$18.30"
                    span12="List price:"
                    h12="$28.00"
                    p12="First Lie Wins: Reese's Book Club Pick (A Novel) Hardcover-"
                    />
            </div>
        </section>
        <section className='sec-3'>
            <div className='product-con-4'>
            <Lengthcard2 headding="Best Sellers in Home & Kitchen"
            img1="https://m.media-amazon.com/images/I/61nY9nYn30L._AC_SY200_.jpg"
            img2="https://m.media-amazon.com/images/I/518uAgWUTgL._AC_SY200_.jpg"
            img3="https://m.media-amazon.com/images/I/71UUKORj72L._AC_SY200_.jpg"
            img4="https://m.media-amazon.com/images/I/71xT3oCdeqL._AC_SY200_.jpg"
            img5="https://m.media-amazon.com/images/I/71nhPE7vxHL._AC_SY200_.jpg"
            img6="https://m.media-amazon.com/images/I/81RLgrUwG5L._AC_SY200_.jpg"
            img7="https://m.media-amazon.com/images/I/71ubxkib-XL._AC_SY200_.jpg"
            img8="https://m.media-amazon.com/images/I/71a1TpxDVOL._AC_SY200_.jpg"
            />
            </div>
        </section>
        <section className='sec-4'>
            <div className='product-con-5'>
                <Card headding="Gaming merchandise" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg"
                span1="Apparel"
                img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg"
                span2="Hats"
                img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg"
                span3="action figures"
                img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg"
                span4="Mugs"
                />
                <SingleCard headding="Shop activity trackers and smartwatches"
                img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                />
                <Card headding="Fashion trends you like" img1="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg"
                 span1="Dresses"
                 img2="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg"
                 span2="Knits"
                 img3="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg"
                 span3="Jackets"
                 img4="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg"
                 span4="Jewelry" 
                 />
                <SingleCard headding="Player's paradise starts here"
                img1="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546843_2940864_379x304_1X_en_US._SY304_CB613273467_.jpg"
                />
            </div>
        </section>
        <section className='sec-5'>
            <div className='product-con-6'>
                <Lengthcard3
                 headding="Best Sellers in Books"
                 img1="https://m.media-amazon.com/images/I/715TZNPAeiL._AC_SY200_.jpg"
                 img2="https://m.media-amazon.com/images/I/61GE2EitO8L._AC_SY200_.jpg"
                 img3="https://m.media-amazon.com/images/I/61T1J-a8D1L._AC_SY200_.jpg"
                 img4="https://m.media-amazon.com/images/I/71eIH9Ai0OL._AC_SY200_.jpg"
                 img5="https://m.media-amazon.com/images/I/61UPretwyoL._AC_SY200_.jpg"
                 img6="https://m.media-amazon.com/images/I/61vC-9qpeML._AC_SY200_.jpg"
                 img7="https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_SY200_.jpg"
                 img8="https://m.media-amazon.com/images/I/71CX11nGhWL._AC_SY200_.jpg"
                 img9="https://m.media-amazon.com/images/I/81U27X4m6EL._AC_SY200_.jpg"
                />
            </div>
        </section>
        <section className='sec-6'>
            <div className='product-con-7'>
            <Lengthcard2 headding="Best Sellers in Sports & Outdoors"
            img1="https://m.media-amazon.com/images/I/81+D8FkHLXL._AC_SY200_.jpg"
            img2="https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SY200_.jpg"
            img3="https://m.media-amazon.com/images/I/71-P2+J2RQL._AC_SY200_.jpg"
            img4="https://m.media-amazon.com/images/I/817U5N6rypL._AC_SY200_.jpg"
            img5="https://m.media-amazon.com/images/I/616L47yQi5L._AC_SY200_.jpg"
            img6="https://m.media-amazon.com/images/I/61wn2jfhBkL._AC_SY200_.jpg"
            // img7=""
            // img8=""
            />
            </div>
        </section>
        <section className='footer'>
            <div className='backtotop'>
                <span>Back to Top</span>
            </div>
            <div className='detail'>
                <div className='table'>
                    <div>
                        <div className='t-head'>Get to Know Us</div>
                        <ul>
                            <li>Careers</li>  
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazon Science</li>
                        </ul>
                    </div>
                    <div>
                        <div className='t-head'>Make Money with Us</div>
                        <ul>
                            <li>Sell products on Amazon</li>  
                            <li>Sell on Amazon Business</li>
                            <li>Sell apps on Amazon</li>
                            <li>Become an Affiliate</li>
                            <li>Advertise Your Products</li>
                            <li>Self-Publish with Us</li>
                            <li>Host an Amazon Hub</li>
                            <li>See More Make Money with Us</li>
                        </ul>
                    </div>
                    <div>
                        <div className='t-head'>Amazon Payment Products</div>
                        <ul>
                            <li>Amazon Business Card</li>  
                            <li>Shop with Points</li>
                            <li>Reload Your Balance</li>
                            <li>Amazon Currency Converter</li>  
                        </ul>
                    </div>
                    <div>
                        <div className='t-head'>Let Us Help You</div>
                        <ul>
                            <li>Amazon and COVID-19</li>  
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Shipping Rates & Policies</li>
                            <li>Returns & Replacements</li>
                            <li>Manage Your Content and Devices</li>
                            <li>Amazon Assistant</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='other'>
                <div className='other-1'>
                    <div className='amazon-logo'>
                        <a href="#"> <img src='./amazonpics/ClipartKey_1478728.png' alt=""></img></a>
                    </div>
                    <div className='language'>
                        <span><TbWorld /></span>
                        <span>English</span>
                        <p><PiCaretUpDownDuotone /></p>
                    </div>
                    <div className='dollers'>
                        <span>$ USD - U.S. Dolar</span>
                    </div>
                    <div className='national'>
                        <img src='./amazonpics/ClipartKey_2386898.png' alt=""></img>
                        <span>United States</span>
                    </div>
                </div>
            </div>
            <div className='extra-detail'>
                <div className='table-1'>
                    <div>
                        <div className='t-head'>Amazon Music</div>
                        <div className='content'>
                            <span>Stream millions of songs</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Amazon Ads</div>
                        <div className='content'>
                            <span>Reach customers wherever they spend their time</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>6pm</div>
                        <div className='content'>
                            <span>Score deals on fasion brands</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>AbeBooks</div>
                        <div className='content'>
                            <span>Books,art& collectibles</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>ACX</div>
                        <div className='content'>
                            <span>Audiobook Publishing Made Easy</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Sell on Amazon</div>
                        <div className='content'>
                            <span>Start a Selling Account</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Amazon Business</div>
                        <div className='content'>
                            <span>Everything For Your Business</span>
                        </div>
                    </div>
                </div>
                <div className='table-2'>
                    <div>
                        <div className='t-head'>AmazonGlobal</div>
                        <div className='content'>
                            <span>Ship Orders Internationally</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Home Service</div>
                        <div className='content'>
                            <span>Experienced Procs Happiness Gurantee</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Amazon Web Services</div>
                        <div className='content'>
                            <span>Scalable Cloud Computing Services</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Audible</div>
                        <div className='content'>
                            <span>Listen to Books & Orginal Audio Performances</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Box Office Mojo</div>
                        <div className='content'>
                            <span>Find Movie Box Office Data</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Goodreads</div>
                        <div className='content'>
                            <span>Book Reviews & recommendations</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>IMDb</div>
                        <div className='content'>
                            <span>Movies,TV & Celebrities</span>
                        </div>
                    </div>
                </div>
                <div className='table-3'>
                    <div>
                        <div className='t-head'>IMDbPro</div>
                        <div className='content'>
                            <span>Get Info Entertainment Professionals Need</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Kindle Direct Publishing</div>
                        <div className='content'>
                            <span>Indie Digital & Print Publishing Made Easy</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Prime Video Direct</div>
                        <div className='content'>
                            <span>Video Distribution Made Easy </span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Shopbop</div>
                        <div className='content'>
                            <span>Designer Fashion Brands</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Woot!</div>
                        <div className='content'>
                            <span> Deals and Shenanigans</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Zappos</div>
                        <div className='content'>
                            <span>Shoes & Clothing</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Ring</div>
                        <div className='content'>
                            <span>Smart HomeSecurity Systems</span>
                        </div>
                    </div>
                </div>
                <div className='table-4'>
                    <div>
                        <div className='t-head'>Amazon Music</div>
                        <div className='content'>
                            <span>Stream millions of songs</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>eero WiFi</div>
                        <div className='content'>
                            <span>Stream 4K Video in Every Room</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Blink</div>
                        <div className='content'>
                            <span>Smart Security for Every Home</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Neighbors App</div>
                        <div className='content'>
                            <span>Real-Time Crime & Safety Alerts</span>
                        </div>
                    </div>
                    <div>
                        <div className='t-head'>Amazon Subscription Boxes</div>
                        <div className='content'>
                            <span>Top subscription boxes – right to your door</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='information'>
                <div className='infor'>
                    <div>
                        <span>Conditions of Use</span>
                        <span>Privacy Notice</span>
                        <span>Your Ads Privacy Choices</span>
                        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                    </div>

                </div>

            </div>
        </section>
        </>
    )
}


export default Project1