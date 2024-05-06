import {useEffect} from 'react'
import './Properties.css'
import PagesHero from '../../components/PagesHero/PagesHero'
import { Link } from 'react-router-dom'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import property1 from './../../assets/property-01.jpg'
import property2 from './../../assets/property-02.jpg'
import property3 from './../../assets/property-03.jpg'
import property4 from './../../assets/property-04.jpg'
import property5 from './../../assets/property-05.jpg'
import property6 from './../../assets/property-06.jpg'
const data = {
  house1: {
    category: 'Luxury Villa',
    price: '2.264.000',
    address: '18 New Street Miami, OR 97219',
    info: {
      bedrooms: '8',
      bathrooms: '8',
      area: '545',
      floor: '3',
      parking: '6 spots'
    }
  },
  house2: {
    category: 'Luxury Villa',
    price: '1.180.000',
    address: '54 Mid Street Florida, OR 27001',
    info: {
      bedrooms: '6',
      bathrooms: '5',
      area: '450',
      floor: '3',
      parking: '8 spots'
    }
  },
  house3: {
    category: 'Luxury Villa',
    price: '1.460.000',
    address: '26 Old Street Miami, OR 38540',
    info: {
      bedrooms: '5',
      bathrooms: '4',
      area: '225',
      floor: '3',
      parking: '10 spots'
    }
  },
  house4: {
    category: 'Apartment',
    price: '584.500',
    address: '12 New Street Miami, OR 12650',
    info: {
      bedrooms: '4',
      bathrooms: '3',
      area: '125',
      floor: "25th",
      parking: "2 cars"
    }
  },
  house5: {
    category: 'Penthouse',
    price: '925.600',
    address: '34 Beach Street Miami, OR 42680',
    info: {
      bedrooms: '4',
      bathrooms: '4',
      area: '180',
      floor: "35th",
      parking: "2 cars"
    }
  },
  house6: {
    category: 'Modern Condo',
    price: '450.000',
    address: '22 New Street Portland, OR 16540',
    info: {
      bedrooms: '3',
      bathrooms: '2',
      area: '165',
      floor: "26th",
      parking: "3 cars"
    }
  },
}
function Properties() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className='properties-page'>
      <PagesHero name="PROPERTIES" />
      <div className="properties-filter">
        <ul className="nav">
          <li>
            <Link className='activeFilter'>
              Show All
            </Link>
          </li>
          <li>
            <Link>
              Apartment
            </Link>
          </li>
          <li>
            <Link>
              Villa House
            </Link>
          </li>
          <li>
            <Link>
              Penthouse
            </Link>
          </li>
        </ul>
      </div>
      <div className="property-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property1} category={data.house1.category} price={data.house1.price} address={data.house1.address} info={data.house1.info} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property2} category={data.house2.category} price={data.house2.price} address={data.house2.address} info={data.house2.info} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property3} category={data.house3.category} price={data.house3.price} address={data.house3.address} info={data.house3.info} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property4} category={data.house4.category} price={data.house4.price} address={data.house4.address} info={data.house4.info} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property5} category={data.house5.category} price={data.house5.price} address={data.house5.address} info={data.house5.info} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property6} category={data.house6.category} price={data.house6.price} address={data.house6.address} info={data.house6.info} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property1} category={data.house1.category} price={data.house1.price} address={data.house1.address} info={data.house1.info} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property2} category={data.house2.category} price={data.house2.price} address={data.house2.address} info={data.house2.info} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <PropertyCard image={property3} category={data.house3.category} price={data.house3.price} address={data.house3.address} info={data.house3.info} />
            </div>
          </div>
          <div className="nav-circle">
            <div className="circle-properties">1</div>
            <div className="circle-properties">2</div>
            <div className="circle-properties">3</div>
            <div className="circle-properties">&gt;&gt;</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties