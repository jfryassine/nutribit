import React from 'react'
import './cards.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import {Carousel} from 'react-bootstrap'
import leaf from '../../assets/leaf.png'
import food1 from '../../assets/food1.jpg'
import food2 from '../../assets/food2.jpg'
import food3 from '../../assets/food3.jpg'

export const Cards = () => {
  return (
    <>
    <Carousel fade className='carousel'>
  <Carousel.Item>
    <img
      className="d-block w-100 car-img"
      src={food1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='label_first'>label of first slide</h3>
      <p className='p_first'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 car-img"
      src={food2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 car-img"
      src={food3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    <div class="row container">


            <div class="col-md-6 mx-auto">

               
                <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div class="blockquote-custom-icon shadow-sm bq-icon"><i className='leaf'><img src={leaf} /></i></div>
                    <p class="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" class="text-info">@consequat</a>."</p>
                    <footer class="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
                

            </div>
            
        </div>
        </>
  )
}
