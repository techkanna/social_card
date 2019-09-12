import React from 'react';
import CardBody from './CardBody';

class Card extends React.Component{
	render(){
		return (
			<div className='container'>
				<div className='wrap'>
					<div className='logo'><div className='logoContent'><p>DEV</p></div></div>
					<div className='content'>
						<p><b>The Practical Dev </b> <small>@ThePracticalDev . sep 12 </small> <span className='sideMenu'> <i class="fas fa-chevron-down"></i></span>
						</p>
						<p>
							learning React? Start Small.
						</p>
						<p>
						{'{author : @senthil}'}
						</p>
						<CardBody />
						<div className='icons'>
							<i className="far fa-comment"></i> <span>10</span>
							<i style={{color:"green"}}className="fas fa-retweet"></i> <span style={{color:"green"}}>10</span>
							<i style={{color:"red"}}className="fas fa-heart"></i> <span style={{color:"red"}}>10</span>
							<i className="far fa-envelope"></i> <span>10</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;