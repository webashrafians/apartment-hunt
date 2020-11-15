import React, { useEffect, useState } from 'react';
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
            title: 'Epic Huda Palacio',
            img: House1,
            price: '$356'
        },
        {
            title: 'Epic Huda Palacio',
            img: House2,
            price: '$356'
        },
        {
            title: 'Epic Huda Palacio',
            img: House3,
            price: '$356'
        },
        {
            title: 'Epic Huda Palacio',
            img: House4,
            price: '$356'
        },
        {
            title: 'Epic Huda Palacio',
            img: House5,
            price: '$356'
        },
        {
            title: 'Epic Huda Palacio',
            img: House6,
            price: '$356'
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
                                            <span style={{color: '#747474', marginBottom:'8px'}}> Nasirabad H/S, Chattogram</span>   
                                        </div>
                                        <div style={{display: 'flex',marginBottom:'42px'}}>
                                            <div>
                                                <img src={bedroom} alt="" height="20" width="15"/>
                                                <span style={{color: '#747474'}}> 3 bedrooms</span>
                                            </div>
                                            <div style={{marginLeft: '60px'}}>
                                                <img src={bathroom} alt="" height="20" width="15"/>
                                                <span style={{color: '#747474'}}> 2 bathrooms</span>
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