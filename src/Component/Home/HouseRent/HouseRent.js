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
    const [apartment, setApartment]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allApartment')
        .then(res=>res.json())
        .then(data=>
                    setApartment(data)
        )


    }, [])

    const hrData = [
        {
            title: 'Washington Avenue',
            img: "https://i.ibb.co/KWD7FFZ/Rectangle-394.png",
            price: '$194',
            location: 'Nasirabad H/S, Chattogram',
            bathRoom:'2 Bathroom',
            bedRoom: '3 Bedrooms',
            titleDetails: '3000 sq-ft, Bedroom, semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
            propertyDetails: 'Address & Area : Rangs Malancha, House -68 , Road -6A(Dead End Road), Dhanmondi Residential Area',
            priceDetails: 'Rent/Month: $194(negotiable) Service Charge: 8000/= tk per month, subject to change Security Deposit: 3 months rent Flat Release Policy: 3 months earlier notice required',
            img1: "https://i.ibb.co/DWMXMf4/Rectangle-410.png",
            img2: "https://i.ibb.co/nnrCmJq/Rectangle-409.png",
            img3: "https://i.ibb.co/P6K8HM1/Rectangle-408.png" ,
            img4: "https://i.ibb.co/n73CPLM/Rectangle-407.png"
        },
        {
            title: 'Family Apartment Three',
            img: "https://i.ibb.co/Hq3cSL3/Rectangle-396.png" ,
            price: '$356',
            location: 'Nasirabad H/S, Chattogram',
            bathRoom:'2 Bathroom',
            bedRoom: '3 Bedrooms',
            titleDetails: '3000 sq-ft, Bedroom, semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
            propertyDetails: 'Address & Area : Rangs Malancha, House -68 , Road -6A(Dead End Road), Dhanmondi Residential Area',
            priceDetails: 'Rent/Month: $194(negotiable) Service Charge: 8000/= tk per month, subject to change Security Deposit: 3 months rent Flat Release Policy: 3 months earlier notice required',
            img1: "https://i.ibb.co/DWMXMf4/Rectangle-410.png",
            img2: "https://i.ibb.co/nnrCmJq/Rectangle-409.png",
            img3: "https://i.ibb.co/P6K8HM1/Rectangle-408.png" ,
            img4: "https://i.ibb.co/n73CPLM/Rectangle-407.png"
        },
        {
            title: 'Gorgeous house',
            img: "https://i.ibb.co/XDgTJG5/Rectangle-398.png" ,
            price: '$256',
            location: 'Nasirabad H/S, Chattogram',
            bathRoom:'2 Bathroom',
            bedRoom: '3 Bedrooms',
            titleDetails: '3000 sq-ft, Bedroom, semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
            propertyDetails: 'Address & Area : Rangs Malancha, House -68 , Road -6A(Dead End Road), Dhanmondi Residential Area',
            priceDetails: 'Rent/Month: $194(negotiable) Service Charge: 8000/= tk per month, subject to change Security Deposit: 3 months rent Flat Release Policy: 3 months earlier notice required',
            img1: "https://i.ibb.co/DWMXMf4/Rectangle-410.png",
            img2: "https://i.ibb.co/nnrCmJq/Rectangle-409.png",
            img3: "https://i.ibb.co/P6K8HM1/Rectangle-408.png" ,
            img4: "https://i.ibb.co/n73CPLM/Rectangle-407.png"
        },
        {
            title: 'Luxury villa',
            img: "https://i.ibb.co/6m6ZPMt/Rectangle-405.png",
            price: '$346',
            location: 'Nasirabad H/S, Chattogram',
            bathRoom:'2 Bathroom',
            bedRoom: '3 Bedrooms',
            titleDetails: '3000 sq-ft, Bedroom, semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
            propertyDetails: 'Address & Area : Rangs Malancha, House -68 , Road -6A(Dead End Road), Dhanmondi Residential Area',
            priceDetails: 'Rent/Month: $194(negotiable) Service Charge: 8000/= tk per month, subject to change Security Deposit: 3 months rent Flat Release Policy: 3 months earlier notice required',
            img1: "https://i.ibb.co/DWMXMf4/Rectangle-410.png",
            img2: "https://i.ibb.co/nnrCmJq/Rectangle-409.png",
            img3: "https://i.ibb.co/P6K8HM1/Rectangle-408.png" ,
            img4: "https://i.ibb.co/n73CPLM/Rectangle-407.png"
        },
        {
            title: 'Epic Huda Palacio',
            img: "https://i.ibb.co/L1w34KC/Rectangle-403.png",
            price: '$536',
            location: 'Nasirabad H/S, Chattogram',
            bathRoom:'2 Bathroom',
            bedRoom: '3 Bedrooms',
            titleDetails: '3000 sq-ft, Bedroom, semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
            propertyDetails: 'Address & Area : Rangs Malancha, House -68 , Road -6A(Dead End Road), Dhanmondi Residential Area',
            priceDetails: 'Rent/Month: $194(negotiable) Service Charge: 8000/= tk per month, subject to change Security Deposit: 3 months rent Flat Release Policy: 3 months earlier notice required',
            img1: "https://i.ibb.co/DWMXMf4/Rectangle-410.png",
            img2: "https://i.ibb.co/nnrCmJq/Rectangle-409.png",
            img3: "https://i.ibb.co/P6K8HM1/Rectangle-408.png" ,
            img4: "https://i.ibb.co/n73CPLM/Rectangle-407.png"
        },
        {
            title: 'washington Avenue',
            img: "https://i.ibb.co/TW51bKn/Rectangle-404.png",
            price: '$283',
            location: 'Nasirabad H/S, Chattogram',
            bathRoom:'2 Bathroom',
            bedRoom: '3 Bedrooms',
            titleDetails: '3000 sq-ft, Bedroom, semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.',
            propertyDetails: 'Address & Area : Rangs Malancha, House -68 , Road -6A(Dead End Road), Dhanmondi Residential Area',
            priceDetails: 'Rent/Month: $194(negotiable) Service Charge: 8000/= tk per month, subject to change Security Deposit: 3 months rent Flat Release Policy: 3 months earlier notice required',
            img1: "https://i.ibb.co/DWMXMf4/Rectangle-410.png",
            img2: "https://i.ibb.co/nnrCmJq/Rectangle-409.png",
            img3: "https://i.ibb.co/P6K8HM1/Rectangle-408.png" ,
            img4: "https://i.ibb.co/n73CPLM/Rectangle-407.png"
        }

    ]

    const handelAdd=()=>{
        fetch('http://localhost:5000/addAll',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(hrData)
        })
        .then(res=>res.json())
        .then(data=>{
                    
            data? alert("Service added"): console.log(data) 
        })

    }


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
                       apartment && apartment.map(house=> 
                            <div className="col-md-4">
                                <div className="card card_shadow" style={{marginBottom: "29px", border: "none"}}>
                                    <img src={house.img} className="card-img-top rentimg" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color: '#16322E', fontSize: '24px', fontWeight: 'bold'}}>{house.title}</h5>
                                        <div className="card-text">
                                            <img src={location} alt="" height="20" width="15"/>
                                            <span style={{color: '#747474', marginBottom:'8px'}}>{house.location}</span>   
                                        </div>
                                        <div style={{display: 'flex',marginBottom:'42px'}}>
                                            <div>
                                                <img src={bedroom} alt="" height="20" width="15"/>
                                                <span style={{color: '#747474'}}>{house.bedRoom}</span>
                                            </div>
                                            <div style={{marginLeft: '60px'}}>
                                                <img src={bathroom} alt="" height="20" width="15"/>
                                                <span style={{color: '#747474'}}>{house.bathRoom}</span>
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