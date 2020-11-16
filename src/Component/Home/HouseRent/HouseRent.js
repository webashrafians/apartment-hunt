import React from 'react';
import location from '../../../images/location.png';
import bathroom from '../../../images/bath.png';
import bedroom from '../../../images/bed.png';
import House1 from '../../../images/rent/house2.png';
import House2 from '../../../images/rent/house3.png';
import House3 from '../../../images/rent/house4.png';
import House4 from '../../../images/rent/house5.png';
import House5 from '../../../images/rent/house6.png';
import House6 from '../../../images/rent/house7.png';
import { Link } from 'react-router-dom';
import "./HouseRent.css"

const HouseRent = () => {

    const hrData = [
        {
            id: 1,
            title: "Avanna Apartment",
            img: House1,
            price: 350,
            place: "Kadomtoli H/S, Chattogram",
            ablility: [ "3 Bedroom", "3 Bathroom" ],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam ea soluta architecto doloremque iste.",
            priceDetail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi.",
            propertyDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione!"
        },        
        {
            id: 2,
            title: "Family Apartment Three",
            img: House2,
            price: 380,
            place: "Hatimtali H/S, Chattogram",
            ablility: [ "2 Bedroom", "3 Bathroom" ],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam ea soluta architecto doloremque iste.",
            priceDetail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi.",
            propertyDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione!"
        },        
        {
            id: 3,
            title: "Chayaghor Resorte",
            img: House3,
            price: 450,
            place: "Hatimtali H/S, Chattogram",
            ablility: [ "2 Bedroom", "3 Bathroom" ],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam ea soluta architecto doloremque iste.",
            priceDetail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi.",
            propertyDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione!"
        },        
        {
            id: 4,
            title: "Holi Family Lodge",
            img: House4,
            price: 375,
            place: "Kadomtali H/S, Chattogram",
            ablility: [ "2 Bedroom", "3 Bathroom" ],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam ea soluta architecto doloremque iste.",
            priceDetail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi.",
            propertyDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione!"
        },        
        {
            id: 5,
            title: "Proshanto Resorte",
            img: House5,
            price: 650,
            place: "Nimtala H/S, Chattogram",
            ablility: [ "2 Bedroom", "4 Bathroom" ],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam ea soluta architecto doloremque iste.",
            priceDetail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi.",
            propertyDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione!"
        },        
        {
            id: 6,
            title: "Ashalata Bichung Lodge",
            img: House6,
            price: 520,
            place: "Hatimtali H/S, Chattogram",
            ablility: [ "2 Bedroom", "3 Bathroom" ],
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam ea soluta architecto doloremque iste.",
            priceDetail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi. Quia deserunt ipsam officia aliquid beatae quasi alias excepturi, magni eum ut optio unde labore tenetur laborum voluptates delectus, animi quam sequi.",
            propertyDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, illum unde ut id perspiciatis fugiat inventore molestiae dolore natus enim non dolores in sint ab rem ducimus, illo eum laboriosam ad delectus? Incidunt repudiandae modi quisquam libero id assumenda! Magnam laborum voluptatibus eveniet incidunt fugit consequuntur nihil mollitia, commodi nesciunt molestias vero, veritatis corporis quam ullam debitis non facilis ratione!"
        }

    ]

    return (
        <div style={{backgroundColor:"#F1F6F4"}}>
            <div>
                <p className="text-center " style={{paddingTop:"28px",marginBottom:"55px"}}>
                    <small className="color-brand" style={{fontSize:"16px", height:"24px"}}>House Rent <br/> </small>
                   <span style={{color:"#16322E", fontWeight:"bold", fontFamily:"poppins", fontSize:"34px"}}>Discover the latest Rent <br/> available today</span> 
                </p>
            </div>

            <div className="container">
                <div className="row">
                    {
                        hrData.map(house=> 
                            <div className="col-md-4">
                                <div className="card card_shadow" style={{marginBottom: "29px", border: "none"}}>
                                    <img src={house.img} className="card-img-top rentimg" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color: '#16322E', fontSize: '24px', fontWeight: 'bold'}}>{house.title}</h5>
                                        <div className="card-text">
                                            <img src={location} alt="" height="20" width="15"/>
                                            <span style={{color: '#747474', marginBottom:'8px'}}> {house.place}</span>   
                                        </div>
                                        <div style={{display: 'flex',marginBottom:'42px'}}>
                                            <div>
                                                <img src={bedroom} alt="" height="20" width="15"/>
                                                <span style={{color: '#747474'}}> {house.ablility[0]} </span>
                                            </div>
                                            <div style={{marginLeft: '60px'}}>
                                                <img src={bathroom} alt="" height="20" width="15"/>
                                                <span style={{color: '#747474'}}> {house.ablility[1]} </span>
                                            </div>
                                        </div>
                                        <div style={{display: 'flex'}}>
                                            <h2 style={{marginRight: '60px',color: '#275A53', fontSize: '36px', fontWeight: 'bold'}}>${house.price}</h2>
                                            <Link to="">
                                                <button className="btn-brand" style={{padding:"13px 20px"}}>View Details</button>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HouseRent;