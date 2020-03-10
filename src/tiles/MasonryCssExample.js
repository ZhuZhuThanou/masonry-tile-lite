import React, { Component } from 'react';
// import Masonry from 'react-masonry-css';
import Masonry from './Masonry';
import './MasonryCss.style.css';

  
class MasonryCssExample extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, columnBreak: 1};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        console.log(this.state.columnBreak); 
        if (window.innerWidth > 1024) {
            this.setState({ width: window.innerWidth, height: window.innerHeight, columnBreak: 3 });
        } else if (window.innerWidth <= 1024 && window.innerWidth > 414) {
            this.setState({ width: window.innerWidth, height: window.innerHeight, columnBreak: 2 });
        } else {
            this.setState({ width: window.innerWidth, height: window.innerHeight, columnBreak: 1 });
        }
        
      }
    
    render() {
        return (
            <Masonry
            breakpointCols={this.state.columnBreak}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">

                <div className="block">
                    <img src="http://placehold.it/350x220" alt="place holder"/>
                    <div className="content">
                        <p>Lorem ipsumtrices mattis augue. Nam maximus enim tortor. Lorem ipsum dolor sit ameadipiscing.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="block">
                    <img src="http://placehold.it/350x220" alt="place holder"/>
                    <div className="content">
                        <h2>Small title 3</h2>
                        <p>nsectetur adipiscing.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="block">
                    <img src="http://placehold.it/350x300" alt="place holder"/>
                    <div className="content">
                        <h2>Small title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante lorem.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="block">
                    <img src="http://placehold.it/350x300" alt="place holder"/>
                    <div className="content">
                        <h2>Small title 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante lorem.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="block">
                    <img src="http://placehold.it/350x220" alt="place holder"/>
                    <div className="content">
                        <h2>Small title 3</h2>
                        <p>nsectetur adipiscing.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="block">
                    <img src="http://placehold.it/350x220" alt="place holder"/>
                    <div className="content">
                        <p>Lorem ipsumtrices mattis augue. Nam maximus enim tortor. Lorem ipsum dolor sit ameadipiscing.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </Masonry>
        )
        }
}

export default MasonryCssExample;