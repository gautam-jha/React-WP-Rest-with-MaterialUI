import React, { Component } from 'react'
import {CircularProgress} from "@material-ui/core"
import Slider from "react-slick";
import {Title, BlogGrid} from "../Component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            postLoading:true,
            posts:[]
        }
    }

    componentDidMount(){
        fetch('https://wordpress.org/news/wp-json/wp/v2/posts?per_page=5').then(res =>res.json())
        .then((result)=>{
            console.log(result);
            this.setState({
                postLoading:false,
                posts:result
            })
            window.scrollTo(0, 0);
            },
            (error)=>{
                console.log(error);
                this.setState({
                    postLoading:true,
                    error
                })
            })
        }
    

    render() {
        const {posts, postLoading} = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          const settings2 = {
            dots: true,
            nav:true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return (
            <div>
            <Slider {...settings}>
                <div key={1}>
                    <img src="https://picsum.photos/1200/400" alt="slider 1"></img>
                </div>
                <div key={2}>
                    <img src="https://picsum.photos/1200/400" alt="slider 1"></img>
                </div>
              
                <div key={3}>
                <img src="https://picsum.photos/1200/400" alt="slider 1"></img>
                </div>
                <div key={4}>
                 <img src="https://picsum.photos/1200/400" alt="slider 1"></img>
                </div>
                </Slider>
            
            <Title title="Blogs & News" subtitle="know more about lastest packages and updates" />
            {postLoading && (
                <CircularProgress color="secondary" className=""/>
            )
            }
            {posts && (
                
                    <Slider {...settings2}>
                    {
                posts.map(post=>(
                   
                            <BlogGrid post={post} key={post.id}/>
                       
                ))
                }
               
               </Slider>
               
                
            )}
               

            </div>
        )
    }
}
